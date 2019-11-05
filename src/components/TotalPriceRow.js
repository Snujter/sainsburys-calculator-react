import React, { Component } from 'react';
import Price from "./Price";
import {observer} from "mobx-react";

class TotalPriceRow extends Component {
    render() {
        const { payers } = this.props;
        const totalPaid = payers.reduce((acc, payer) => acc + payer.totalPaid, 0);

        return (
            <tr>
                <td>TOTALS</td>
                <td/>
                <td/>
                <td><Price price={totalPaid}/></td>
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
