import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EqualPayButton extends Component {
    render() {
        const { payerId, handleClick } = this.props;
        return (
            <input type="checkbox"
                   checked="checked"
                   className={payerId === 'all' ? 'all-checkbox' : 'payer-checkbox'}
                   onClick={handleClick}
            />
        );
    }
}

EqualPayButton.propTypes = {
    payerId: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default EqualPayButton;
