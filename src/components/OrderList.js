import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderRow from "./OrderRow";

class OrderList extends Component {
    constructor(props) {
        super(props);

        const initialPayments = this.setupPayments(props.items, props.buyers);

        this.state = {
            initialPayments: initialPayments,
            payments: [...initialPayments],
        };
    }

    setupPayments(rawItems, buyers) {
        let payments = [];

        rawItems.forEach(item => {
            buyers.forEach(payer => {
                payments.push({
                    buyerId: payer.id,
                    itemId: item.id,
                    price: Math.floor(item.price / buyers.length),
                });
            });
        });

        console.log(payments);

        return payments;
    }

    render() {
        const { items, buyers } = this.props;
        const { payments } = this.state;

        return items.map(item => {
            const { id, name, quantity, price } = item;

            return <OrderRow
                key={id}
                id={id}
                name={name}
                quantity={quantity}
                price={price}
                buyers={buyers}
                handleEqualPayBtnClick={handleEqualPayBtnClick}
                payments={payments.filter(payment => payment.itemId === id)}
            />
        });
    };
}

function handleEqualPayBtnClick()
{
    console.log('ay fam');
}

OrderList.propTypes = {
    items: PropTypes.array,
    buyers: PropTypes.array,
};

export default OrderList;
