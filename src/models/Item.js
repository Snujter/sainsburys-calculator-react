import {types} from "mobx-state-tree";

export const ItemModel = types
    .model("ItemModel", {
        id: types.identifier,
        name: types.string,
        quantity: types.optional(types.integer, 0),
        price: types.optional(types.integer, 0),
    })
    .views(self => ({
        get totalPrice() {
            return self.quantity * self.price;
        },
    }));

