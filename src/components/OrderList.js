import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderRow from "./OrderRow";

class OrderList extends Component {
    render() {
        const { items, payers, handleEqualPayBtnClick, payments } = this.props;

        console.log("aaaaaaaaaaaa");
        console.log(payments);

        return items.map(item => {
            const { id, name, quantity, price } = item;

            return <OrderRow
                key={id}
                id={id}
                name={name}
                quantity={quantity}
                price={price}
                payers={payers}
                handleEqualPayBtnClick={handleEqualPayBtnClick}
                payments={payments.filter(payment => payment.itemId === id)}
            />
        });
    };
}

OrderList.propTypes = {
    items: PropTypes.array,
    payers: PropTypes.array,
    payments: PropTypes.array,
    handleEqualPayBtnClick: PropTypes.func.isRequired,
};

export default OrderList;
