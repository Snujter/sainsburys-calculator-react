import React, { Component } from 'react';
import formatPrice from '../formatters/formatPrice';
import {observer} from "mobx-react";

class Price extends Component {
    render() {
        const { price } = this.props;

        return (
            <span>{formatPrice(price)}</span>
        );
    }
}

export default observer(Price);
