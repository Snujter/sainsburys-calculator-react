import { types } from "mobx-state-tree";
import {PayerModel} from "./Payer";

export const DeliveryModel = types
    .model("DeliveryModel", {
        price: types.integer,
        date: types.Date,
        payers: types.array(types.reference(PayerModel)),
    })
    .views(self => ({
        get pricePerPerson() {
            return Math.floor(self.price / self.payers.length);
        },
    }));
