import React, { Component } from 'react';
import ItemList from "./ItemList";
import OrderHeader from "./OrderHeader";
import DeliveryRow from "./DeliveryRow";
import TotalPriceRow from "./TotalPriceRow";
import {observer} from "mobx-react";

class OrderTable extends Component {
    render() {
        const { changePaymentGroup, items, delivery, payers, paymentGroups, totalPrice } = this.props;

        return (
            <table id="jewify-table">
                <thead>
                    <OrderHeader payers={payers}/>
                </thead>
                <tbody>
                    <ItemList changePaymentGroup={changePaymentGroup}
                              items={items}
                              payers={payers}
                              paymentGroups={paymentGroups}
                    />
                    <DeliveryRow payers={payers} delivery={delivery}/>
                    <TotalPriceRow payers={payers} totalPrice={totalPrice}/>
                </tbody>
            </table>
        );
    }
}

export default observer(OrderTable);
