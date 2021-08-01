import {getType, types} from "mobx-state-tree";
import {EqualPaymentGroupModel} from "./paymentGroups/EqualPaymentGroup";
import {ByQuantityPaymentGroupModel} from "./paymentGroups/ByQuantityPaymentGroup";
import {PayerModel} from "./Payer";
import {ItemModel} from "./Item";
import {DeliveryModel} from "./Delivery";
import formatPrice from "../formatters/formatPrice";
import {generateUUID} from "../helpers/helper";

export const AppModel = types
    .model("AppModel", {
        items: types.array(ItemModel),
        payers: types.array(PayerModel),
        paymentGroups: types.optional(types.array(types.union(
          EqualPaymentGroupModel,
          ByQuantityPaymentGroupModel
        )), []),
        delivery: DeliveryModel,
    })
    .actions(self => ({
        changePaymentGroup(paymentGroupId, type) {
            const i = self.paymentGroups.findIndex(group => group.id === paymentGroupId);
            // if we want to change to the same type just ignore it
            if (getType(self.paymentGroups[i]).name === self.paymentGroupMap[type]) {
                return null;
            }

            let newPaymentGroup;
            if (type === "equal") {
                newPaymentGroup = EqualPaymentGroupModel.create({
                    id: generateUUID(),
                    item: self.paymentGroups[i].item.id,
                    payers: self.payers.map(payer => payer.id),
                    remainderPayer: self.payers[1].id, // hardcoded Snajder
                })
            } else if (type === "by_quantity") {
                newPaymentGroup = ByQuantityPaymentGroupModel.create({
                    id: generateUUID(),
                    item: self.paymentGroups[i].item.id,
                    payers: self.payers.map(payer => ({
                        payer: payer.id,
                        quantity: 0,
                    })),
                })
            }

            if (newPaymentGroup) {
                self.paymentGroups[i] = newPaymentGroup;
            }
        },
    }))
    .views(self => ({
        get paymentGroupMap() {
            return {
                "equal": "EqualPaymentGroupModel",
                "by_quantity": "ByQuantityPaymentGroupModel",
            };
        },
        get totalPaid() {
            return self.paymentGroups.reduce((acc, group) => acc + group.totalPaid);
        },
        get totalPrice() {
            return self.items.reduce((acc, item) => acc + item.totalPrice, 0) + self.delivery.price;
        },
        get csvData() {
            let rows = [];

            // headers
            let headers = [
                "Item no.",
                "Name",
                "Quantity",
                "Total price",
                ...self.payers.map(payer => payer.name),
            ];
            rows.push(headers);

            // items
            const itemData = self.paymentGroups.map((group, i) => {
                return [
                    i + 1,
                    group.item.name,
                    group.item.quantity,
                    formatPrice(group.item.totalPrice),
                    ...self.payers.map(payer => formatPrice(group.getAmountForPayer(payer.id))),
                ];
            });
            rows.push(...itemData);

            // delivery
            rows.push([
                '',
                'Delivery',
                '',
                formatPrice(self.delivery.price),
                ...self.payers.map(payer => formatPrice(self.delivery.pricePerPerson)),
            ]);

            // totals
            rows.push([
                '',
                'TOTALS',
                '',
                formatPrice(self.totalPrice),
                ...self.payers.map(payer => formatPrice(payer.totalPaid)),
            ]);

            return rows;
        }
    }));
