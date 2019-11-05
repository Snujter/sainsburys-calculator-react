import React, { Component } from 'react';
import EqualPayButton from "./EqualPayButton";
import Price from "./Price";
import {observer} from "mobx-react";

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
                    <td key={payer.id}>
                        <div className="payment">
                            <Price price={paymentGroup.getAmountForPayer(payer.id)}/>
                            <EqualPayButton paymentGroup={paymentGroup} payerId={payer.id}/>
                        </div>
                    </td>
                ))}
            </tr>
        );
    };
}

export default observer(OrderRow);
