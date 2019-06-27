import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EqualPayButton extends Component {
    render() {
        const { payerId, handleClick } = this.props;
        return (
            <input type="checkbox"
                   defaultChecked="checked"
                   className={payerId === 'all' ? 'all-checkbox' : 'payer-checkbox'}
                   onClick={handleClick}
            />
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
