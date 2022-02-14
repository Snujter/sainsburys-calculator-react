const ogItems = [
    {quantity: 3, name: "MORRISONS BRITISH MINCED BEEF 20% FAT 500g (£1.50/EACH)", price: 150},
    {quantity: 1, name: "BRADLEYS JELLIED EELS 200g", price: 300},
    {quantity: 10, name: "MORRISONS ALMOND UNSWEETENED UHT 1l (£1.00/EACH)", price: 100},
    {quantity: 1, name: "MORRISONS CHOCOLATE FLAVOURED FRESH MILK 1l", price: 100},
    {quantity: 1, name: "MORRISONS DOUBLE CREAM 300ml", price: 110},
    {quantity: 2, name: "MORRISONS LARGE FREE RANGE EGGS 12 PACK 12 (£1.69/EACH)", price: 169},
    {quantity: 1, name: "MORRISONS WHITE CHOCOLATE FLAVOURED FRESH MILK 1l", price: 100},
    {quantity: 3, name: "PIATNICA SOURED CREAM 400g (£1.35/EACH)", price: 135},
    {quantity: 1, name: "HOVIS TASTY WHOLEMEAL THICK BREAD 800g", price: 110},
    {quantity: 3, name: "KRAKUS PICKLED DILL CUCUMBERS (865G) 450g (£1.73/EACH)", price: 173},
    {quantity: 2, name: "LACIATE MILK 1l (£1.00/EACH)", price: 100},
    {quantity: 1, name: "MORRISONS ENERGISE EFFERVESCENT VITAMINS 20", price: 150},
    {quantity: 1, name: "MORRISONS VITAMIN C EFFERVESCENT VITAMINS 20", price: 125},
    {quantity: 1, name: "BOLD 2IN1 WASHING LIQUID LAVENDER AND CAMOMILE 1.995L 57 WASHES 1.995l", price: 1000},
    {quantity: 16, name: "CARRIER BAG (£0.10/EACH)", price: 10},
    {quantity: 1, name: "MORRISONS SAVERS JUMBO KITCHEN TOWEL 3", price: 170},
    {quantity: 3, name: "COUNTRYSTYLE 6 JAM & CREAM DOUGHNUTS 300g (£1.00/EACH)", price: 100},
    {quantity: 1, name: "MORRISONS BRITISH CHICKEN DRUMSTICKS 1kg", price: 149},
    {quantity: 1, name: "MORRISONS BRITISH CHICKEN WINGS 1kg", price: 280},
    {quantity: 5, name: "MORRISONS BROCCOLI FLORETS 1kg (£0.69/EACH)", price: 69},
    {quantity: 1, name: "MORRISONS POLLOCK FILLETS 690g", price: 350},
    {quantity: 2, name: "MORRISONS SLICED CARROTS 1kg (£0.85/EACH)", price: 85},
    {quantity: 1, name: "MONSTER ENERGY DRINK 4x500ml", price: 525},
    {quantity: 1, name: "MONSTER MANGO LOCO 4 X 500ML 4x500ml", price: 475},
    {quantity: 1, name: "RADOX SHOWER GEL UPLIFTING 250ml", price: 90},
    {quantity: 1, name: "MORRISONS PINEAPPLE COTTAGE CHEESE 300g", price: 79},
    {quantity: 1, name: "MORRISONS BAKING POTATOES 2.5kg", price: 139},
    {quantity: 2, name: "MORRISONS MILD CHEDDAR 400g", price: 189},
    {quantity: 1, name: "MORRISONS BROWN ONIONS 1kg", price: 65},
    {quantity: 3, name: "RADOX MOISTURISE SHOWER CREAM 250ml", price: 90},
    {quantity: 1, name: "MORRISONS GRANNY SMITH APPLES 6", price: 119},
    {quantity: 7, name: "POT NOODLE CHICKEN & MUSHROOM KING POT 114g", price: 99},
    {quantity: 8, name: "KTC CHOPPED TOMATOES 400g", price: 25},
    {quantity: 1, name: "WEETABIX CRISPY MINIS CHOCOLATE CHIP CEREAL 600g", price: 200},
    {quantity: 3, name: "MORRISONS LOW FAT COTTAGE CHEESE 300g", price: 79},
    {quantity: 3, name: "JOHN WEST TUNA CHUNKS IN BRINE 4x145g", price: 299},
];

export const ogDelivery = {
    price: 400,
    date: "2021-06-20"
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
