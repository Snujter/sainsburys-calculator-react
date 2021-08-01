import {types} from "mobx-state-tree";
import {ItemModel} from "../Item";
import {PayerModel} from "../Payer";

export const ByQuantityPaymentGroupModel = types
    .model("ByQuantityPaymentGroupModel", {
        id: types.identifier,
        item: types.maybe(types.reference(ItemModel)),
        payers: types.optional(types.array(types.model({
            quantity: types.number,
            payer: types.reference(PayerModel),
        })), []),
    })
    .actions(self => ({
        validateQuantity(payerId, newQuantity) {
            const totalQuantity = self.payers.reduce((acc, p) => {
                return acc + (p.payer.id === payerId ? newQuantity : p.quantity);
            }, 0)

            return totalQuantity <= self.item.quantity;
        },
        setQuantityForPayer(payerId, newQuantity) {
            if (self.validateQuantity(payerId, newQuantity)) {
                self.getPayer(payerId).quantity = newQuantity
                return true;
            }
            return false;
        },
    }))
    .views(self => ({
        get total() {
            return self.item ? self.item.price * self.item.quantity : 0;
        },
        get amountPerPerson() {
            return Math.floor(self.total / self.payers.length);
        },
        get totalPaid() {
            return self.amountPerPerson * self.payers.length;
        },
        get totalToPay() {
            return self.total - self.totalPaid;
        },
        getPayer(payerId) {
            return self.payers.find(p => p.payer.id === payerId);
        },
        getAmountForPayer(payerId) {
            return self.item.price * self.getPayer(payerId).quantity
        }
    }));