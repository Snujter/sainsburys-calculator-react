import React, { Component } from 'react';
import Price from "./Price";
import {observer} from "mobx-react";

class DeliveryRow extends Component {
    render() {
        const { payers, delivery } = this.props;

        return (
            <tr>
                <td colSpan={3}>Delivery</td>
                <td><Price price={delivery.price}/></td>
                {payers.map(payer => (
                    <td key={payer.id}>
                        <Price price={delivery.pricePerPerson}/>
                    </td>
                ))}
            </tr>
        );
    }
}

export default observer(DeliveryRow);
