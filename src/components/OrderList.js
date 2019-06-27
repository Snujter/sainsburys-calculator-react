import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderRow from "./OrderRow";

class OrderList extends Component {
    render() {
        const { items, buyers } = this.props;

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
