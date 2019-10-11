import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from "./ItemList";
import OrderHeader from "./OrderHeader";
import DeliveryRow from "./DeliveryRow";

class OrderTable extends Component {
    render() {
        const { items, delivery, payers, payments, handleEqualPayBtnClick, handlePriceChange } = this.props;

        return (
            <table id="jewify-table">
                <thead>
                    <OrderHeader payers={payers}/>
                </thead>
                <tbody>
                    <ItemList items={items}
                               payers={payers}
                               handleEqualPayBtnClick={handleEqualPayBtnClick}
                               handlePriceChange={handlePriceChange}
                               payments={payments}
                    />
                    <DeliveryRow payers={payers} price={delivery.price}/>
                </tbody>
            </table>
        );
    }
}

OrderTable.propTypes = {
    items: PropTypes.array,
    delivery: PropTypes.object,
    payers: PropTypes.array,
    payments: PropTypes.array,
    handleEqualPayBtnClick: PropTypes.func,
    handlePriceChange: PropTypes.func,
};

export default OrderTable;
