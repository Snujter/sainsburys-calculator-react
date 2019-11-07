import React, { Component } from 'react';
import Price from "./Price";
import {observer} from "mobx-react";

class EqualPayment extends Component {
    handleClick = () => {
        const { payer, paymentGroup } = this.props;
        if (!paymentGroup.hasPayer(payer.id)) {
            paymentGroup.addPayer(payer.id);
        } else {
            paymentGroup.removePayer(payer.id);
        }
    }

    render() {
        const { payer, paymentGroup } = this.props;

        return (
            <td className="payer" onClick={this.handleClick}>
                <Price price={paymentGroup.getAmountForPayer(payer.id)}/>
            </td>
        );
    };
}

export default observer(EqualPayment);
