import React, { Component } from 'react';
import Price from "./Price";
import {observer} from "mobx-react";
import EqualPayment from "./EqualPayment";
import ByQuantityPayment from "./ByQuantityPayment";

class OrderRow extends Component {
    constructor(props) {
      super(props);
      this.state = {
        divideType: "equal"
      }

      this.updateDivideType = this.updateDivideType.bind(this);
    }

    updateDivideType(event) {
      const { changePaymentGroup, paymentGroup } = this.props;
      this.setState({divideType: event.target.value});
      changePaymentGroup(paymentGroup.id, event.target.value);
    }

    getPaymentGroup(payer, paymentGroup) {
      if (this.state.divideType === "by_quantity") {
        return <ByQuantityPayment key={payer.id} payer={payer} paymentGroup={paymentGroup}/>
      }

      return <EqualPayment key={payer.id} payer={payer} paymentGroup={paymentGroup}/>
    }

    render() {
        const { payers, paymentGroup, listPosition } = this.props;
        const { name, quantity, totalPrice } = paymentGroup.item;

        return (
            <tr>
                <td>{listPosition + 1}</td>
                <td>{name}</td>
                <td>
                  <select
                    className="type-select"
                    value={this.state.divideType}
                    onChange={this.updateDivideType}
                  >
                    <option value="equal">Equal</option>
                    <option value="by_quantity">By Quantity</option>
                  </select>
                </td>
                <td>{quantity}</td>
                <td><Price price={totalPrice}/></td>
                {payers.map(payer => (
                    this.getPaymentGroup(payer, paymentGroup)
                ))}
            </tr>
        );
    };
}

export default observer(OrderRow);
