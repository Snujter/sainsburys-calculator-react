import React, { Component } from 'react';
import {observer} from "mobx-react";

class EqualPayButton extends Component {
    handleClick(isChecked) {
        const { paymentGroup, payerId } = this.props;
        if (isChecked) {
            paymentGroup.addPayer(payerId);
        } else {
            paymentGroup.removePayer(payerId);
        }
    }

    render() {
        const { paymentGroup, payerId } = this.props;
        const inputId = paymentGroup.id + payerId;
        return (
            <div>
                <input id={inputId}
                       type="checkbox"
                       defaultChecked="checked"
                       className={payerId === 'all' ? 'all-checkbox' : 'payer-checkbox'}
                       onClick={(e) => this.handleClick(e.target.checked)}
                />
                <label htmlFor={inputId} className="payer-image-container">
                    <img src="/images/shekel.png" alt="Shekel"/>
                </label>
            </div>
        );
    }
}

export default observer(EqualPayButton);
