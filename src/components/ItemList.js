import React, { Component } from 'react';
import OrderRow from "./OrderRow";
import {observer} from "mobx-react";

class ItemList extends Component {
    render() {
        const { items, payers, paymentGroups, handlePriceChange } = this.props;

        return items.map((item, i) => {
            return <OrderRow
                key={item.id}
                listPosition={i}
                payers={payers}
                handlePriceChange={handlePriceChange}
                paymentGroup={paymentGroups.find(group => group.item && group.item.id === item.id)}
            />
        });
    };
}

export default observer(ItemList);
