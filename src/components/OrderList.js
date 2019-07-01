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

        rawItems.forEach(item => {
            payers.forEach(payer => {
                payments.push({
                    payerId: payer.id,
                    itemId: item.id,
                    price: Math.floor(item.price / payers.length),
                });
            });
        });

        return payments;
    }

    handleEqualPayBtnClick(isChecked, itemId, payerId) {

        console.log('ay fam');

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
