const ogItems = [{ quantity: 2, name: "Sainsbury's Unsweetened Soya Drink 1L - Total Price", price: 85 }, {
    quantity: 3,
    name: "Sainsbury's Carrots, Baby 1kg - Total Price",
    price: 100
}, { quantity: 2, name: "Sainsbury's Cauliflower & Broccoli Floret Mix 1kg - Total Price", price: 100 }, {
    quantity: 12,
    name: "Sainsbury's Fairtrade Bananas Loose - Total Price",
    price: 12
}, { quantity: 6, name: "Piatnica Soured Cream 400g - Total Price", price: 135 }, {
    quantity: 3,
    name: "Sainsbury's German Black Pepper Salami Slices 140g - Total Price",
    price: 135
}, { quantity: 2, name: "Sainsbury's Woodland Free Range Large Eggs x12 - Total Price", price: 205 }, {
    quantity: 2,
    name: "Princes Tuna Chunks in Spring Water 4x145g (112g*) - Total Price",
    price: 325
}, { quantity: 2, name: "Sainsbury's Chives 5g - Total Price", price: 85 }, {
    quantity: 5,
    name: "KTC Chick Peas 400g - Total Price",
    price: 45
}, { quantity: 1, name: "Sainsbury's Onions 1kg - Total Price", price: 85 }, {
    quantity: 1,
    name: "Sainsbury's Chicken Seasoning 55g - Total Price",
    price: 100
}, { quantity: 2, name: "Hellmann's Real Squeezy Mayonnaise 750ml - Total Price", price: 200 }, {
    quantity: 1,
    name: "Sainsbury's Kitchen Foil 300mm x10m - Total Price",
    price: 125
}, { quantity: 2, name: "Radox Feel Calm Shower 500ml - Total Price", price: 150 }, {
    quantity: 3,
    name: "Sainsbury's Little Ones Cotton Buds Paper Stemmed x300 - Total Price",
    price: 75
}, {
    quantity: 1,
    name: "Sainsbury's Greaseproof & Baking Paper, Non-Stick 10m - Total Price",
    price: 275
}, { quantity: 12, name: "Laciate 3.2% UHT Milk 1L - Total Price", price: 100 }, {
    quantity: 1,
    name: "Sainsbury's Chicken Drumsticks 1kg - Total Price",
    price: 150
}, { quantity: 1, name: "Sainsbury's Chicken Thighs 1kg - Total Price", price: 180 }, {
    quantity: 1,
    name: "Sainsbury's British Pork Mince 20% Fat 500g - Total Price",
    price: 175
}, {
    quantity: 4,
    name: "Monster Energy The Doctor 500ml (Sugar levy applied) - Total Price",
    price: 155
}, { quantity: 6, name: "Sainsbury's Nutty Nougat Chocolate Bars 5x36g - Total Price", price: 90 }, {
    quantity: 2,
    name: "Hovis Medium Sliced Wholemeal Bread 800g - Total Price",
    price: 110
}, { quantity: 1, name: "Sainsbury's British Pork Shoulder Steaks x6 900g - Total Price", price: 425 }, {
    quantity: 1,
    name: "Sainsbury's Classic Round Tomatoes x6 - Total Price",
    price: 75
}, { quantity: 4, name: "Sainsbury's British Mild Cheddar Cheese 400g - Total Price", price: 200 }, {
    quantity: 1,
    name: "Sainsbury's Vodka 70cl - Total Price",
    price: 1000
}, { quantity: 1, name: "Dr Pepper 2L - Total Price", price: 150 }, {
    quantity: 2,
    name: "Sainsbury's White Seedless Grapes 500g - Total Price",
    price: 175
}, { quantity: 2, name: "Old Jamaica Grape Soda Can 330ml - Total Price", price: 45 }, {
    quantity: 1,
    name: "Sainsbury's Tangerines 600g - Total Price",
    price: 100
}, { quantity: 1, name: "Sainsbury's Granny Smith Apples x6 - Total Price", price: 160 }, {
    quantity: 1,
    name: "Ktc Brown Lentils 1kg - Total Price",
    price: 200
}, { quantity: 1, name: "Sainsbury's Sunflower Oil 3L - Total Price", price: 300 }, {
    quantity: 1,
    name: "Sainsbury's Whole Cucumber - Total Price",
    price: 43
}, { quantity: 1, name: "Sainsbury's Plain Flour 1.5kg - Total Price", price: 80 }, {
    quantity: 4,
    name: "Sainsbury's Beef Mince 20% Fat 500g - Total Price",
    price: 180
}, { quantity: 2, name: "Sainsbury's Plain Tortilla Wraps x8 512g - Total Price", price: 90 }, {
    quantity: 6,
    name: "Pot Noodle King Pot Chicken & Mushroom 114g - Total Price",
    price: 90
}, { quantity: 2, name: "Pot Noodle Sticky Rib 90g - Total Price", price: 75 }, {
    quantity: 1,
    name: "Pot Noodle Thai Green Curry 90g - Total Price",
    price: 75
}, { quantity: 4, name: "Sainsbury's Udon Noodles 300g - Total Price", price: 125 }, {
    quantity: 8,
    name: "KTC Chopped Tomatoes 400g - Total Price",
    price: 45
}, { quantity: 2, name: "Sainsbury's Mascarpone Cheese 250g - Total Price", price: 160 }, {
    quantity: 2,
    name: "Elmlea Double Cream Alternative 284ml - Total Price",
    price: 120
}, { quantity: 6, name: "Sainsbury's Spaghetti 1kg - Total Price", price: 100 }, {
    quantity: 2,
    name: "Sainsbury's White Caster Sugar 1kg - Total Price",
    price: 160
}, { quantity: 2, name: "Sainsbury's Vanilla Doughnuts x5 - Total Price", price: 80 }, {
    quantity: 4,
    name: "Just Snax Salted Peanuts 200g - Total Price",
    price: 50
}, { quantity: 1, name: "Sainsbury's Carrots 500g - Total Price", price: 35 }, {
    quantity: 1,
    name: "Nutella Chocolate Spread 1kg - Total Price",
    price: 500
}, { quantity: 1, name: "Hubbard's Foodstore Sparkling Waters 2L - Total Price", price: 20 }, {
    quantity: 1,
    name: "Highland Spring Still Water 6x1.5L - Total Price",
    price: 250
}, { quantity: 1, name: "Salaam Basmati Rice 10kg - Total Price", price: 1200 }, {
    quantity: 3,
    name: "Sainsbury's Basil 15g - Total Price",
    price: 85
}, {
    quantity: 8,
    name: "Hubbard's Foodstore Baked Beans In Tomato Sauce, 400g - Total Price",
    price: 22
}, { quantity: 2, name: "Colgate Total Whitening Toothpaste 125ml - Total Price", price: 200 }, {
    quantity: 1,
    name: "Sainsbury's Vanilla Flavour 38ml - Total Price",
    price: 100
}, {
    quantity: 2,
    name: "Sainsbury's British Wafer Thin Honey Cured Ham 400g - Total Price",
    price: 220
}, { quantity: 4, name: "Premier Deli Salami 80g - Total Price", price: 75 }, {
    quantity: 1,
    name: "Sainsbury's Grated Mozzarella Cheese 500g - Total Price",
    price: 300
}, { quantity: 3, name: "Sainsbury's Sardines in Olive Oil 120g (90g*) - Total Price", price: 40 }, {
    quantity: 2,
    name: "John West Tuna Chunks in Spring Water 4x145g - Total Price",
    price: 500
}, {
    quantity: 1,
    name: "Sainsbury's Naturally Sweet Sweetcorn In Water 3x325g (3x260g*) - Total Price",
    price: 170
}, { quantity: 1, name: "Fanta Orange 8x330ml - Total Price", price: 400 }]

export const ogDelivery = {
    price:  400,
    date: "2021-01-16"
};

export const ogPayers = [
    {id: 1, name: "Kriszcson"},
    {id: 2, name: "Snajder"},
    {id: 3, name: "Szabo"},
];

export const testData = {
    delivery: ogDelivery,
    items: ogItems,
    payers: ogPayers,
}
