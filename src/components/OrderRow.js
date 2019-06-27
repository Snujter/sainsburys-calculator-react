import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EqualPayButton from "./EqualPayButton";

class OrderRow extends Component {
    render() {
        const { id, name, quantity, price, buyers, handleEqualPayBtnClick } = this.props;

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td><EqualPayButton payerId="all" handleClick={handleEqualPayBtnClick}/></td>
                {buyers.map(buyer => (
                    <td>
                        <EqualPayButton payerId={buyer.id} handleClick={handleEqualPayBtnClick}/>
                    </td>
                ))}
            </tr>
        );
    };
}

OrderRow.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    buyers: PropTypes.array.isRequired,
    handleEqualPayBtnClick: PropTypes.func.isRequired,
};

export default OrderRow;
