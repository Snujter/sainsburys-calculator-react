import React, { Component } from 'react';
import formatPrice from '../formatters/formatPrice';
import PropTypes from 'prop-types';

class OrderItem extends Component {
    render() {
        const { price, name } = this.props;
        return (
            <div>{name} - {formatPrice(price)}</div>
        );
    }
}

OrderItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default OrderItem;
