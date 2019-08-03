import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EqualPayButton from "./EqualPayButton";
import Price from "./Price";

class OrderRow extends Component {
    constructor() {
        super();
        this.state = {
            isChangingPrice: false,
            newPrice: 0,
        }
    }

    render() {
        const {
            id,
            name,
            quantity,
            payers,
            payments,

            handleEqualPayBtnClick
        } = this.props;

        const { isChangingPrice } = this.state;

        console.log(isChangingPrice);

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{isChangingPrice ? this.renderChangingPrice() : this.renderPrice()}</td>
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

    renderChangingPrice() {
        return (
            <div>
                <input type="number" onChange={(e) => this.setState({newPrice: e.target.value})}/>
                <button onClick={() => this.handlePriceChange()}>Save</button>
            </div>
        );
    }

    handlePriceChange() {
        const { id, handlePriceChange } = this.props;

        this.setState({isChangingPrice: false});
        handlePriceChange(id, this.state.newPrice);
    }

    renderPrice = () => (
        <div>
            <Price price={this.props.price}/>
            <button onClick={() => this.setState({isChangingPrice: true})}>Change</button>
        </div>
    );
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
    handlePriceChange: PropTypes.func.isRequired,
};

export default OrderRow;
