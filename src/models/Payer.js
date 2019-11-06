import {getRoot, types} from "mobx-state-tree";

export const PayerModel = types
    .model("PayerModel", {
        id: types.identifier,
        name: types.string,
    })
    .views(self => ({
        get totalPaid() {
            const root = getRoot(self);
            const itemPayments = root.paymentGroups.reduce((acc, group) => acc + group.getAmountForPayer(self.id), 0);
            const deliveryPayment = root.delivery.pricePerPerson

            return itemPayments + deliveryPayment;
        },
    }));
