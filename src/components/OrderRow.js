import React, { Component } from 'react';
import EqualPayButton from "./EqualPayButton";
import Price from "./Price";
import {observer} from "mobx-react";

class OrderRow extends Component {
    constructor() {
        super();
        this.state = {
            isChangingPrice: false,
            newPrice: 0,
        }
    }

    render() {
        const { payers, paymentGroup, listPosition } = this.props;
        const { name, quantity } = paymentGroup.item;
        const { isChangingPrice } = this.state;

        return (
            <tr>
                <td>{listPosition + 1}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{isChangingPrice ? this.renderChangingPrice() : this.renderPrice()}</td>
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

    renderChangingPrice() {
        return (
            <div>
                <input type="number" onChange={(e) => this.setState({newPrice: e.target.value})}/>
                <button onClick={() => this.handlePriceChange()}>Save</button>
            </div>
        );
    }

    handlePriceChange() {
        const { id, handlePriceChange } = this.props;

        this.setState({isChangingPrice: false});
        handlePriceChange(id, this.state.newPrice);
    }

    renderPrice = () => (
        <div>
            <Price price={this.props.paymentGroup.item.totalPrice}/>
            <button onClick={() => this.setState({isChangingPrice: true})}>Change</button>
        </div>
    );
}

export default observer(OrderRow);
