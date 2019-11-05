import React, { Component } from 'react';
import ItemList from "./ItemList";
import OrderHeader from "./OrderHeader";
import DeliveryRow from "./DeliveryRow";
import TotalPriceRow from "./TotalPriceRow";
import {observer} from "mobx-react";

class OrderTable extends Component {
    render() {
        const { items, delivery, payers, paymentGroups, handlePriceChange } = this.props;

        return (
            <table id="jewify-table">
                <thead>
                    <OrderHeader payers={payers}/>
                </thead>
                <tbody>
                    <ItemList items={items}
                              payers={payers}
                              handlePriceChange={handlePriceChange}
                              paymentGroups={paymentGroups}
                    />
                    <DeliveryRow payers={payers} delivery={delivery}/>
                    <TotalPriceRow payers={payers}/>
                </tbody>
            </table>
        );
    }
}

export default observer(OrderTable);
