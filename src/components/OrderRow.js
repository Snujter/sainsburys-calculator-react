import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EqualPayButton from "./EqualPayButton";
import Price from "./Price";

class OrderRow extends Component {
    render() {
        const { id, name, quantity, price, buyers, handleEqualPayBtnClick } = this.props;

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td><Price price={price}/></td>
                <td><EqualPayButton payerId="all" itemId={id} handleClick={handleEqualPayBtnClick}/></td>
                {buyers.map(buyer => (
                    <td key={buyer.id}>
                        <EqualPayButton payerId={buyer.id} itemId={id} handleClick={handleEqualPayBtnClick}/>
                    </td>
                ))}
            </tr>
        );
    };
}

OrderRow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    buyers: PropTypes.array.isRequired,
    handleEqualPayBtnClick: PropTypes.func.isRequired,
};

export default OrderRow;
