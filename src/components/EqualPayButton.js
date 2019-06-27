import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EqualPayButton extends Component {
    render() {
        const { id, handleClick } = this.props;
        return (
            <input type="checkbox"
                   id={id}
                   checked="checked"
                   className={id === 'all' ? 'all-checkbox' : 'payer-checkbox'}
                   onClick={handleClick}
            />
        );
    }
}

EqualPayButton.propTypes = {
    id: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default EqualPayButton;
