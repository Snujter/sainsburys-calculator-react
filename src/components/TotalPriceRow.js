import React, { Component } from 'react';
import Price from "./Price";

class TotalPriceRow extends Component {
    getPaySummary() {
        const { payments, deliveryPrice } = this.props;
        let summs = [];

        payments.map(payment => {
            const amount = +payment.price;
            if (payment.payerId in summs) {
                summs[payment.payerId] += amount;
            } else {
                summs[payment.payerId] = amount;
            }
        });

        const deliveryFraction = deliveryPrice / Object.keys(summs).length;
        return summs.map(summ => summ + deliveryFraction);
    }

    render() {
        const { payers } = this.props;
        const paySummary = this.getPaySummary();

        return (
            <tr>
                <td>TOTALS</td>
                <td/>
                <td/>
                <td/>
                {payers.map(payer => (
                    <td key={payer.id}>
                        <Price price={paySummary[payer.id]}/>
                    </td>
                ))}
            </tr>
        );
    }
}

export default TotalPriceRow;
