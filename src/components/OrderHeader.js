import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderHeader extends Component {
    render() {
        const { buyers } = this.props;

        return (
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>All</th>
                {buyers.map(buyer => <th key={buyer.id}>{buyer.name}</th>)}
            </tr>
        );
    };
}

OrderHeader.propTypes = {
    buyers: PropTypes.array,
};

export default OrderHeader;
