import React, { Component } from 'react';
import Price from "./Price";
import {observer} from "mobx-react";

class TotalPriceRow extends Component {
    render() {
        const { payers, totalPrice } = this.props;

        return (
            <tr>
                <td colSpan={4}>TOTALS</td>
                <td><Price price={totalPrice}/></td>
                {payers.map(payer => (
                    <td key={payer.id}>
                        <Price price={payer.totalPaid}/>
                    </td>
                ))}
            </tr>
        );
    }
}

export default observer(TotalPriceRow);
