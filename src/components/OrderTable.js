import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderList from "./OrderList";
import OrderHeader from "./OrderHeader";

class OrderTable extends Component {
    render() {
        const { items, delivery, buyers } = this.props;

        return (
            <table>
                <thead>
                    <OrderHeader buyers={buyers}/>
                </thead>
                <tbody>
                    <OrderList items={items} delivery={delivery} buyers={buyers}/>
                </tbody>
            </table>
        );
    }
}

OrderTable.propTypes = {
    items: PropTypes.array,
    delivery: PropTypes.object,
    buyers: PropTypes.array,
};

export default OrderTable;
