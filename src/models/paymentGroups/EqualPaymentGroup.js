import {types} from "mobx-state-tree";
import {ItemModel} from "../Item";
import {PayerModel} from "../Payer";

export const EqualPaymentGroupModel = types
    .model("EqualPaymentGroupModel", {
        id: types.identifier,
        item: types.maybe(types.reference(ItemModel)),
        payers: types.optional(types.array(types.reference(PayerModel)), []),
        remainderPayer: types.maybeNull(types.reference(PayerModel))
    })
    .actions(self => ({
        addPayer(payerId) {
            if (self.payers.find(payer => payer.id === payerId)) {
                return;
            }

            self.payers.push(payerId);
            if (self.remainder && !self.remainderPayer) {
                self.setRemainderPayer(self.randomPayer.id);
            }
        },
        removePayer(idToRemove) {
            self.payers = self.payers.filter(payer => payer.id !== idToRemove);
            if (self.remainderPayer && self.remainderPayer.id === idToRemove) {
                self.setRemainderPayer(self.remainder ? self.randomPayer.id : null);
            }
        },
        setRemainderPayer(payerId) {
            self.remainderPayer = payerId;
        },
    }))
    .views(self => ({
        get randomPayer() {
            return self.payers[Math.floor(Math.random()*self.payers.length)];
        },
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
        get remainder() {
            return self.total % self.payers.length;
        },
        get payerIds() {
            return self.payers.map(payer => payer.id);
        },
        hasPayer(payerId) {
            return self.payerIds.indexOf(payerId) !== -1;
        },
        getAmountForPayer(payerId) {
            let amount = 0;
            if (self.hasPayer(payerId)) {
                amount = self.amountPerPerson;
                if (self.remainder && self.remainderPayer && self.remainderPayer.id === payerId) {
                    amount += self.remainder;
                }
            }
            return amount;
        }
    }));