import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppModel} from './models/App';
import * as serviceWorker from './serviceWorker';
import {EqualPaymentGroupModel} from "./models/paymentGroups/EqualPaymentGroup";
import {PayerModel} from "./models/Payer";
import {testData} from './test-data'
import {ItemModel} from "./models/Item";
import {generateUUID} from "./helpers/helper";
import {DeliveryModel} from "./models/Delivery";

const formatPayers = (rawPayers) => {
    return rawPayers.map(payer => PayerModel.create({
        id: generateUUID(),
        name: payer.name,
    }))
};

const formatItems = (rawItems) => {
    return rawItems.map(item => ItemModel.create({
        id: generateUUID(),
        name: item.name.trim(),
        quantity: parseInt(item.quantity),
        price: parseInt(item.price),
    }))
};

const formatDelivery = (rawDelivery, payerIds) => {
    return DeliveryModel.create({
        price: parseInt(rawDelivery.price),
        date: new Date(rawDelivery.date),
        payers: payerIds,
    });
}

const initPaymentGroups = (items, payerIds) => {
    let currentPayerIndex = 0;

    return items.map(item => {
        let remainderPayer = null;
        if (item.total % payerIds.length !== 0) {
            remainderPayer = payerIds[currentPayerIndex];
            const isLastIndex = currentPayerIndex === (payerIds.length - 1);
            currentPayerIndex = isLastIndex ? 0 : currentPayerIndex + 1;
        }

        return EqualPaymentGroupModel.create({
            id: generateUUID(),
            item: item.id,
            payers: payerIds,
            remainderPayer: remainderPayer,
        })
    })
};

const payers = formatPayers(testData.payers);
const payerIds = payers.map(payer => payer.id);
const items = formatItems(testData.items);
const delivery = formatDelivery(testData.delivery, payerIds);
const paymentGroups = initPaymentGroups(items, payerIds);

const app = AppModel.create({
    items,
    payers,
    delivery,
    paymentGroups,
});

ReactDOM.render(<App app={app}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
