
const payments = {
    1: {
        1: 150,
        3: 100,
        8: 150,
    },
    2: {
        1: 100,
        3: 100,
        8: 150,
    },
}

const itemPaymentGroups = [
    {id: 1, itemId: 1, type: "equal", payerIds: [1, 2]},
    {id: 2, itemId: 2, type: "equal", payerIds: [1, 2, 3]},
    {id: 3, itemId: 3, type: "equal", payerIds: [1, 2, 3]},
    {id: 4, itemId: 4, type: "equal", payerIds: [1]},
];

const deliveryPaymentGroup = {
    total: 500,
    type: "equal",
    payers: [{payerId: 1, percentage: 30}, {payerId: 2, percentage: 70}]
};

const paymentGroups = [
    {id: 1, name: "Doofenschmirtz Schnitzel 200g", price: 500, quantity: 4, type: "percentage", payers: [{payerId: 1, percentage: 30}, {payerId: 2, percentage: 70}]},
    {id: 2, name: "Evil Inc. Fish 500gg", price: 500, quantity: 4, type: "equal", payers: [1, 3]},
    {id: 3, name: "Some Mayo", price: 500, quantity: 4, type: "custom", payers: [{payerId: 1, amount: 200}]},
];

const app = {
    items: [
        {id: 1, name: "Doofenschmirtz Schnitzel 200g", price: 500, quantity: 4, paymentGroup: 1}
    ],
    delivery: {
        date: new Date('2019-10-25'),
        paymentGroup: 2,
    },
    payers: [
        {id: 1, name: "Kriszcson"},
        {id: 2, name: "Snajder"},
        {id: 3, name: "Szabo"},
    ],
    paymentGroups: [
        {id: 1, name: "Doofenschmirtz Schnitzel 200g", price: 500, quantity: 4, type: "percentage", payers: [{payerId: 1, percentage: 30}, {payerId: 2, percentage: 70}]},
        {id: 2, name: "Evil Inc. Fish 500gg", price: 500, quantity: 4, type: "equal", payers: [1, 3]},
        {id: 3, name: "Some Mayo", price: 500, quantity: 4, type: "custom", payers: [{payerId: 1, amount: 200}]},
    ],
}


const percentageGroup = {
    id: 1,
    price: 1000,
    quantity: 4,
    payers: [{id: 1, percentage: 30}, {id: 2, percentage: 70}],

    // views
    payerIds: () => {
        return self.payers.map(payer => payer.id);
    },
    totalPrice: () => {
        return self.price * self.quantity;
    },
    getAmount: (percentage) => {
        return (100 / percentage) * this.totalPrice()
    },
    amountsByPayerId: () => {
        let byId = [];
        self.payers.forEach(payer => {
            byId[payer.id] = self.getAmount(payer.percentage)
        });
        return byId;
    }
}

const equalGroup = {
    id: 1,
    price: 1000,
    quantity: 4,
    payers: [1, 2],

    amountsByPayerId: () => {
        let byId = [];
        const amount = this.price / this.payers.length;
        self.payers.forEach(payerId => {
            byId[payerId] = amount;
        });
        return byId;
    },
}
