import React, { Component } from 'react';
import Price from "./Price";

class DeliveryRow extends Component {
    render() {
        const { price, payers } = this.props;
        const pricePerPerson = price / payers.length;

        return (
            <tr>
                <td>Delivery</td>
                <td/>
                <td/>
                <td/>
                {payers.map(payer => (
                    <td key={payer.id}>
                        <Price price={pricePerPerson}/>
                    </td>
                ))}
            </tr>
        );
    }
}

export default DeliveryRow;
