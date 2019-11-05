import { types } from "mobx-state-tree";
import * as React from "react";
import {PayerModel} from "./Payer";

export const DeliveryModel = types
    .model("DeliveryModel", {
        price: types.integer,
        date: types.Date,
        payers: types.array(types.reference(PayerModel)),
    })
    .views(self => ({
        get pricePerPerson() {
            return Math.round(self.price / self.payers.length);
        },
    }));
