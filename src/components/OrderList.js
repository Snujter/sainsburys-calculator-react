import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderRow from "./OrderRow";

class OrderList extends Component {
    render() {
        const { items, buyers } = this.props;
        const itemList = items.map(item => {
            const { id, name, quantity, price } = item;

            return <OrderRow
                id={id}
                name={name}
                quantity={quantity}
                price={price}
                buyers={buyers}
                handleEqualPayBtnClick={handleEqualPayBtnClick}
            />
        });

        return <tr>{itemList}</tr>;
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
