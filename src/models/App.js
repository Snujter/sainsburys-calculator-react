import { types } from "mobx-state-tree";
import {EqualPaymentGroupModel} from "./paymentGroups/EqualPaymentGroup";
import {PayerModel} from "./Payer";
import {ItemModel} from "./Item";
import {DeliveryModel} from "./Delivery";
import formatPrice from "../formatters/formatPrice";

export const AppModel = types
    .model("AppModel", {
        items: types.array(ItemModel),
        payers: types.array(PayerModel),
        paymentGroups: types.optional(types.array(EqualPaymentGroupModel), []),
        delivery: DeliveryModel,
    })
    .views(self => ({
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
