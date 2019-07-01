import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderRow from "./OrderRow";

class OrderList extends Component {
    constructor(props) {
        super(props);

        const initialPayments = this.setupPayments(props.items, props.payers);
        this.state = {
            initialPayments: initialPayments,
            payments: [...initialPayments],
        };

        this.handleEqualPayBtnClick = this.handleEqualPayBtnClick.bind(this);
    }

    setupPayments(rawItems, payers) {
        let payments = [];

        let paymentId = 0;
        rawItems.forEach(item => {
            payers.forEach(payer => {
                payments.push({
                    id: paymentId++,
                    payerId: payer.id,
                    itemId: item.id,
                    price: Math.floor(item.price / payers.length),
                });
            });
        });

        return payments;
    }

    handleEqualPayBtnClick(isChecked, itemId, payerId) {
        const { items } = this.props;
        const { payments } = this.state;

        const item = items.find(item => item.id === itemId);
        const nonItemPayments = payments.filter(payment => payment.itemId !== itemId);
        const itemPayments = payments.filter(payment => payment.itemId === itemId);

        let payerCount = itemPayments.reduce(OrderList.countPayers, 0);
        payerCount = isChecked ? (payerCount + 1) : (payerCount - 1);

        const newPrice = payerCount > 0 ? Math.floor(item.price / payerCount) : 0;
        const newItemPayments = itemPayments.map(payment => {
            const isCurrentPayment = payment.itemId === itemId && payment.payerId === payerId;
            const price = (isCurrentPayment && !isChecked) || (!isCurrentPayment && payment.price === 0) ?
                0 :
                newPrice;

            return {
                ...payment,
                price: price
            };
        });

        this.setState({payments: [
            ...nonItemPayments,
            ...newItemPayments,
        ]});
    }

    static countPayers(accumulator, currentPayment) {
        if (currentPayment.price > 0) {
            accumulator++;
        }
        return accumulator;
    }

    render() {
        const { items, payers } = this.props;
        const { payments } = this.state;

        return items.map(item => {
            const { id, name, quantity, price } = item;

            return <OrderRow
                key={id}
                id={id}
                name={name}
                quantity={quantity}
                price={price}
                payers={payers}
                handleEqualPayBtnClick={this.handleEqualPayBtnClick}
                payments={payments.filter(payment => payment.itemId === id)}
            />
        });
    };
}

OrderList.propTypes = {
    items: PropTypes.array,
    payers: PropTypes.array,
};

export default OrderList;
