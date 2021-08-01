import React, { Component } from 'react';
import OrderRow from "./OrderRow";
import {observer} from "mobx-react";

class ItemList extends Component {
    render() {
        const { changePaymentGroup, items, payers, paymentGroups } = this.props;

        return items.map((item, i) => {
            return <OrderRow
                key={item.id}
                listPosition={i}
                changePaymentGroup={changePaymentGroup}
                payers={payers}
                paymentGroup={paymentGroups.find(group => group.item && group.item.id === item.id)}
            />
        });
    };
}

export default observer(ItemList);
