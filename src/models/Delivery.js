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
        get formattedDate() {
            const year = self.date.getFullYear();
            let month = '' + (self.date.getMonth() + 1),
                day = '' + self.date.getDate();

            if (month.length < 2) {
                month = '0' + month;
            }
            if (day.length < 2) {
                day = '0' + day;
            }

            console.log([year, month, day]);
            console.log(self.date);

            return [year, month, day].join('-');
        }
    }));
