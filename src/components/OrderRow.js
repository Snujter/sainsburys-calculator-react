import React, { Component } from 'react';
import Price from "./Price";
import {observer} from "mobx-react";
import EqualPayment from "./EqualPayment";

class OrderRow extends Component {
    render() {
        const { payers, paymentGroup, listPosition } = this.props;
        const { name, quantity, totalPrice } = paymentGroup.item;

        return (
            <tr>
                <td>{listPosition + 1}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td><Price price={totalPrice}/></td>
                {payers.map(payer => (
                    <EqualPayment key={payer.id} payer={payer} paymentGroup={paymentGroup}/>
                ))}
            </tr>
        );
    };
}

export default observer(OrderRow);
