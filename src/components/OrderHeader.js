import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderHeader extends Component {
    render() {
        const { payers } = this.props;

        return (
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Price</th>
                {payers.map(payer => <th key={payer.id}>{payer.name}</th>)}
            </tr>
        );
    };
}

OrderHeader.propTypes = {
    payers: PropTypes.array,
};

export default OrderHeader;
