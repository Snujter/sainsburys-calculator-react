const ogItems = [{quantity: 2, name: "Laciate 3.2% UHT Milk 1L - Total Price", price: 100}, {
    quantity: 2,
    name: "Sainsbury's Nutty Nougat Chocolate Bars 5x36g - Total Price",
    price: 90
}, {quantity: 2, name: "Sainsbury's Vanilla Doughnuts x5 - Total Price", price: 95}, {
    quantity: 1,
    name: "Sainsbury's British Fresh Chicken Skin on Drumsticks 1kg - Total Price",
    price: 135
}, {quantity: 2, name: "Sainsbury's Beef Mince 20% Fat 500g - Total Price", price: 149}, {
    quantity: 4,
    name: "Radox Feel Calm Shower 500ml - Total Price",
    price: 150
}, {quantity: 2, name: "Hovis Medium Sliced Wholemeal Bread 800g - Total Price", price: 110}, {
    quantity: 1,
    name: "Sainsbury's British Wafer Thin Honey Cured Ham 400g - Total Price",
    price: 220
}, {quantity: 2, name: "Sainsbury's British Mild Cheddar Cheese 400g - Total Price", price: 200}, {
    quantity: 1,
    name: "Heinz Top Down Ketchup 460g - Total Price",
    price: 175
}, {quantity: 1, name: "Sainsbury's British Fresh Chicken Skin on Thighs 1kg - Total Price", price: 165}, {
    quantity: 2,
    name: "Milka Yogurt Chocolate Bar 100g - Total Price",
    price: 100
}, {quantity: 1, name: "Monster Energy 4x500ml - Total Price", price: 425}, {
    quantity: 4,
    name: "Monster Energy The Doctor 500ml (Sugar levy applied) - Total Price",
    price: 155
}, {quantity: 3, name: "Sainsbury's Woodland Free Range Large Eggs x12 - Total Price", price: 205}, {
    quantity: 1,
    name: "Sainsbury's Chicken Seasoning 55g - Total Price",
    price: 100
}, {quantity: 1, name: "Dr Pepper 8x330ml - Total Price", price: 420}, {
    quantity: 1,
    name: "Sainsbury's Jubilee Large Vine Tomatoes, Taste the Difference 450g - Total Price",
    price: 175
}, {
    quantity: 1,
    name: "Bold 2in1 Washing Liquid Lavender and Camomile 1.995L (57 Washes) - Total Price",
    price: 700
}, {quantity: 1, name: "Sainsbury's Wholemeal Bread SO Organic 400g - Total Price", price: 95}, {
    quantity: 1,
    name: "President Butter, Unsalted 250g - Total Price",
    price: 200
}, {quantity: 1, name: "Oven Pride Complete Oven Cleaner 500ml - Total Price", price: 400}, {
    quantity: 2,
    name: "Domestos Toilet Bleach Germ Free Citrus Fresh 750ml - Total Price",
    price: 100
}, {quantity: 2, name: "Cillit Bang Limescale & Grime Trigger Spray 750ml - Total Price", price: 200}, {
    quantity: 1,
    name: "Gillette Sensitive Skin Shaving Gel 200ml - Total Price",
    price: 150
}, {quantity: 1, name: "Cillit Bang Power Cleaner Black Mould Remover 750ml - Total Price", price: 350}, {
    quantity: 1,
    name: "Sainsbury's Window & Glass Cleaner 750ml - Total Price",
    price: 80
}, {quantity: 1, name: "Sainsbury's Bathroom Cleaner Sponges x2 - Total Price", price: 100}, {
    quantity: 2,
    name: "Sainsbury's Super Soft Toilet Tissue, Quilted x9 Rolls - Total Price",
    price: 375
}, {quantity: 1, name: "Sainsbury's Ground Mixed Spice 34g - Total Price", price: 85}, {
    quantity: 1,
    name: "Sainsbury's Whole Cloves 30g - Total Price",
    price: 85
}, {quantity: 1, name: "Colman's Original English Mustard 170g - Total Price", price: 100}, {
    quantity: 1,
    name: "Sainsbury's Baking Potatoes 2.5kg - Total Price",
    price: 200
}, {quantity: 1, name: "Sainsbury's Kitchen Foil 300mm x10m - Total Price", price: 125}, {
    quantity: 4,
    name: "Natco Paprika Powder 100g - Total Price",
    price: 80
}, {quantity: 5, name: "Sainsbury's Cauliflower & Broccoli Floret Mix 1kg - Total Price", price: 100}, {
    quantity: 3,
    name: "Fairy Original Washing Up Liquid Green 1015ml - Total Price",
    price: 200
}, {
    quantity: 1,
    name: "OraCare Travel Dental Floss Waxed Coating Mint Flavour 10m - Total Price",
    price: 100
}, {quantity: 1, name: "Oral B Satin Tape Floss 25m - Total Price", price: 150}, {
    quantity: 1,
    name: "Fudco Cinnamon Powder 100g - Total Price",
    price: 100
}, {quantity: 3, name: "Prymat Whole Dried Bay Leaves 6g - Total Price", price: 30}, {
    quantity: 1,
    name: "Sainsbury's Oregano 60g - Total Price",
    price: 250
}, {quantity: 2, name: "Sainsbury's Scottish Porridge Oats 1kg - Total Price", price: 110}, {
    quantity: 2,
    name: "Sainsbury's Frozen Summer Fruits 500g - Total Price",
    price: 200
}, {quantity: 2, name: "Sainsbury's Wine Vinegar, White Wine 500ml - Total Price", price: 99}, {
    quantity: 1,
    name: "Sarson's Brown Malt Vinegar 400ml - Total Price",
    price: 115
}, {quantity: 1, name: "Sainsbury's Wine Vinegar, Red Wine 500ml - Total Price", price: 99}, {
    quantity: 1,
    name: "Sainsbury's Unsweetened Almond Drink 1L - Total Price",
    price: 110
}, {quantity: 4, name: "Sainsbury's Plain Tortilla Wraps x8 512g - Total Price", price: 90}, {
    quantity: 1,
    name: "Hellmann's Real Squeezy Mayonnaise 750ml - Total Price",
    price: 200
}, {quantity: 1, name: "Sainsbury's Whole Cucumber - Total Price", price: 43}, {
    quantity: 1,
    name: "Sainsbury's Onions 1kg - Total Price",
    price: 85
}, {quantity: 10, name: "Sainsbury's Unsweetened Almond Drink 1L - Total Price", price: 100}, {
    quantity: 1,
    name: "Sainsbury's Smooth Peanut Butter, Basics 340g - Total Price",
    price: 85
}, {quantity: 1, name: "Sainsbury's Peanut Butter Smooth 340g - Total Price", price: 130}, {
    quantity: 4,
    name: "Sainsbury's Cottage Cheese, Fat Free 300g - Total Price",
    price: 140
}, {quantity: 1, name: "Sainsbury's Cottage Cheese 300g - Total Price", price: 140}, {
    quantity: 6,
    name: "KTC Chick Peas 400g - Total Price",
    price: 35
}, {quantity: 2, name: "Sainsbury's Carrots, Baby 1kg - Total Price", price: 100}, {
    quantity: 1,
    name: "Sainsbury's Dijon Mustard 185g - Total Price",
    price: 65
}, {quantity: 1, name: "Sainsbury's Wholegrain Mustard 180g - Total Price", price: 65}, {
    quantity: 6,
    name: "Piatnica Soured Cream 400g - Total Price",
    price: 110
}, {quantity: 1, name: " x Sainsbury's Fairtrade Bananas Loose - Total Price", price: 110}, {
    quantity: 1,
    name: "Fanta Orange 8x330ml - Total Price",
    price: 420
}, {quantity: 1, name: "Fanta Fruit Twist 8x330ml - Total Price", price: 420}, {
    quantity: 1,
    name: "Sainsbury's Chocolate Chunk Muffins x4 276g - Total Price",
    price: 120
}, {quantity: 1, name: "Sainsbury's Super Absorbent Kitchen Towels x2 - Total Price", price: 200}];

export const ogDelivery = {
    price: 400,
    date: "2021-03-26"
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
};
