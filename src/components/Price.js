import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../formatters/formatPrice';

class Price extends Component {
    render() {
        const { price } = this.props;

        return (
            <span>{formatPrice(price)}</span>
        );
    }
}

Price.propTypes = {
    price: PropTypes.number.isRequired,
};

export default Price;
