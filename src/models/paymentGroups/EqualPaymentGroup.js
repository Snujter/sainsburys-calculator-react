import {getParent, types} from "mobx-state-tree";
import * as React from "react";
import {ItemModel} from "../Item";
import {PayerModel} from "../Payer";
import formatPrice from "../../formatters/formatPrice";

export const EqualPaymentGroupModel = types
    .model("EqualPaymentGroupModel", {
        id: types.identifier,
        item: types.maybe(types.reference(ItemModel)),
        payers: types.optional(types.array(types.reference(PayerModel)), []),
    })
    .actions(self => ({
        afterAttach() {
            const parent = getParent(self);
            console.log(parent);
        },
        addPayer(payerId) {
            if (!self.payers.find(payer => payer.id === payerId)) {
                self.payers.push(payerId);
            }
        },
        removePayer(idToRemove) {
            self.payers = self.payers.filter(payer => payer.id !== idToRemove);
        },
    }))
    .views(self => ({
        get total() {
            return self.item ? self.item.price * self.item.quantity : 0;
        },
        get amountPerPerson() {
            return Math.round(self.total / self.payers.length);
        },
        get totalPaid() {
            return self.amountPerPerson * self.payers.length;
        },
        get totalToPay() {
            return self.total - self.totalPaid;
        },
        getAmountForPayer(payerId) {
            const payer = self.payers.find(payer => payer.id === payerId);
            if (!payer) {
                return 0;
            }

            return format ? formatPrice(self.amountPerPerson) : self.amountPerPerson;
        }
    }));