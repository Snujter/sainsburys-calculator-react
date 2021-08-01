import React, { Component } from 'react';
import Price from "./Price";
import {observer} from "mobx-react";

class ByQuantityPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
        }
    }

    handleQuantityUpdate = (e) => {
        const { payer, paymentGroup } = this.props;
        const newQuantity = parseInt(e.target.value);

        if (paymentGroup.setQuantityForPayer(payer.id, newQuantity)) {
            this.setState({
                quantity: newQuantity,
            })
        }
    }

    render() {
        const { payer, paymentGroup } = this.props;
        const amount = paymentGroup.getAmountForPayer(payer.id);

        return (
            <td className={"payer" + (!amount ? " inactive" : "")}>
                <input
                  className={"quantity-input" + (!amount ? " inactive" : "")}
                  type="number"
                  min={0}
                  value={this.state.quantity}
                  onChange={this.handleQuantityUpdate}
                />
                <Price price={amount}/>
            </td>
        );
    };
}

export default observer(ByQuantityPayment);
