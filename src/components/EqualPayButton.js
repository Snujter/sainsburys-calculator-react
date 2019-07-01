import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EqualPayButton extends Component {
    render() {
        const { payerId, itemId, handleClick } = this.props;
        const inputId = itemId + '-' + payerId;
        return (
            <div>
                <input id={inputId}
                       type="checkbox"
                       defaultChecked="checked"
                       className={payerId === 'all' ? 'all-checkbox' : 'payer-checkbox'}
                       onClick={(e) => handleClick(e.target.checked, itemId, payerId)}
                />
                <label htmlFor={inputId} className="payer-image-container">
                    <img src="/images/shekel.png" alt="Shekel"/>
                </label>
            </div>
        );
    }
}

EqualPayButton.propTypes = {
    payerId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    itemId: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default EqualPayButton;
