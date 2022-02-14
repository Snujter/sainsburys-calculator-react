const ogItems = [
    {quantity: 3, name: "MORRISONS BRITISH MINCED BEEF 20% FAT 500g (£1.75/EACH)", price: 175},
    {quantity: 1, name: "MORRISONS GRANNY SMITH APPLES 6", price: 149},
    {quantity: 12, name: "MORRISONS ALMOND UNSWEETENED UHT 1l (£1.00/EACH)", price: 100},
    {quantity: 1, name: "MORRISONS BRAEBURN APPLES 6", price: 149},
    {quantity: 1, name: "MORRISONS CASHEWS 500g", price: 400},
    {quantity: 3, name: "MORRISONS FRENCH CAMEMBERT 250g (£1.60/ EACH)", price: 160},
    {quantity: 5, name: "PIATNICA SOURED CREAM 400g (£1.35/EACH)", price: 135},
    {quantity: 1, name: "HEINZ SWEET BARBECUE SAUCE 500g", price: 200},
    {quantity: 2, name: "JACOBS CREAM CRACKERS TWIN PACK 2x200g (£1.60/EACH)", price: 160},
    {quantity: 1, name: "KING POT NOODLE BOMBAY BAD BOY 114g", price: 100},
    {quantity: 2, name: "LACIATE MILK 1l (£1.00/EACH)", price: 100},
    {quantity: 1, name: "MORRISONS CHIVES 4g", price: 95},
    {quantity: 3, name: "MORRISONS EXTRA VIRGIN OLIVE OIL 1l (£3.39/ EACH)", price: 339},
    {quantity: 8, name: "MORRISONS LONG LIFE ORIGINAL SOYA DRINK 1l (£0.95/EACH)", price: 95},
    {quantity: 1, name: "MORRISONS PEANUT COOKIES 200g", price: 85},
    {quantity: 3, name: "MORRISONS WHITE CHOCOLATE COOKIES 200g (£0.85/EACH)", price: 85},
    {quantity: 1, name: "MORRISONS WHOLE BLACK PEPPER 200g", price: 275},
    {quantity: 6, name: "POT NOODLE CHICKEN & MUSHROOM KING POT 114g (£1.00/EACH)", price: 100},
    {quantity: 17, name: "CARRIER BAG (£0.10/EACH)", price: 10},
    {quantity: 1, name: "LENOR FABRIC CONDITIONER SUMMER BREEZE SCENT 83 WASHES 2.9l", price: 400},
    {quantity: 1, name: "MORRISONS SAVERS JUMBO KITCHEN TOWEL 3", price: 180},
    {quantity: 1, name: "MORRISONS SCOURING SPONGES 8", price: 100},
    {quantity: 4, name: "RADOX MOISTURISE SHOWER CREAM 250ml (£1.00/ EACH)", price: 100},
    {quantity: 2, name: "RADOX SHOWER GEL UPLIFTING 250ml (£1.00/ EACH)", price: 100},
    {quantity: 3, name: "MORRISONS BRITISH SLICES CARROTS 1kg (£0.89/ EACH)", price: 89},
    {quantity: 1, name: "MORRISONS BRITISH CHICKEN DRUMSTICKS 1kg", price: 149},
    {quantity: 1, name: "MORRISONS BROCCOLI FLORETS 1kg", price: 69},
    {quantity: 1, name: "MORRISONS POLLOCK FILLETS 690g", price: 350},
    {quantity: 1, name: "MONSTER ENERGY DRINK 4x500ml", price: 525},
    {quantity: 1, name: "MONSTER MANGO LOCO 4 X 500ML 4x500ml", price: 475},
    {quantity: 2, name: "HOVIS TASTY WHOLEMEAL THICK BREAD 800g", price: 100},
    {quantity: 5, name: "MORRISONS PINEAPPLE COTTAGE CHEESE 300g", price: 79},
    {quantity: 3, name: "MORRISONS MILD CHEDDAR 400g", price: 189},
    {quantity: 1, name: "BIRDS EYE 4 LARGE HADDOCK FILLETS BATTERED 440g", price: 350},
    {quantity: 3, name: "KRAKUS PICKLED DILL CUCUMBERS (865G) 450g", price: 150},
    {quantity: 1, name: "MORRISONS ROUND LETTUCE", price: 45},
    {quantity: 1, name: "MORRISONS SWEETCLEM EASY PEELERS 600g", price: 120},
    {quantity: 1, name: "KINDER MAXI BAR MULTIPACK 6x21g", price: 100},
    {quantity: 1, name: "MORRISONS WHITE POTATOES 2.5kg", price: 99},
    {quantity: 4, name: "MORRISONS CHICKPEAS IN WATER (400G) 240g", price: 33},
    {quantity: 3, name: "MORRISONS SEEDLESS GREEN GRAPES 500g", price: 155},
    {quantity: 1, name: "DOMESTOS CITRUS THICK BLEACH 750ml", price: 100},
    {quantity: 2, name: "MORRISONS LARGE FREE RANGE EGGS 12 PACK 12", price: 150},
];

export const ogDelivery = {
    price: 275,
    date: "2021-07-28"
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
