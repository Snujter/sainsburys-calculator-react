import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderList from "./OrderList";
import OrderHeader from "./OrderHeader";

class OrderTable extends Component {
    render() {
        const { items, delivery, payers } = this.props;

        return (
            <table id="jewify-table">
                <thead>
                    <OrderHeader payers={payers}/>
                </thead>
                <tbody>
                    <OrderList items={items} delivery={delivery} payers={payers}/>
                </tbody>
            </table>
        );
    }
}

OrderTable.propTypes = {
    items: PropTypes.array,
    delivery: PropTypes.object,
    payers: PropTypes.array,
};

export default OrderTable;
