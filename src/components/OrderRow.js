import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EqualPayButton from "./EqualPayButton";
import Price from "./Price";

class OrderRow extends Component {
    render() {
        const { id, name, quantity, price, payers, payments, handleEqualPayBtnClick } = this.props;

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td><Price price={price}/></td>
                <td><EqualPayButton payerId="all" itemId={id} handleClick={handleEqualPayBtnClick}/></td>
                {payers.map(payer => (
                    <td key={payer.id}>
                        <div className="payment">
                            <Price price={payments.find(payment => payment.payerId === payer.id).price}/>
                            <EqualPayButton payerId={payer.id} itemId={id} handleClick={handleEqualPayBtnClick}/>
                        </div>
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
    payers: PropTypes.array.isRequired,
    payments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        payerId: PropTypes.number.isRequired,
        itemId: PropTypes.number,
        price: PropTypes.number,
    })).isRequired,
    handleEqualPayBtnClick: PropTypes.func.isRequired,
};

export default OrderRow;
