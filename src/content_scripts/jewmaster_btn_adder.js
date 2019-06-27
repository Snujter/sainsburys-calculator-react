$(document).ready(function() {
    console.log('document ready');

    // cache
    function getIcon() {
        const iconUrl = browser.extension.getURL("icons/jew-1.png");
        return $('<img>', {
            "class": "jewify-order",
            src: iconUrl,
            css: {
                height: 150,
                display: "inline-block",
                borderRadius: 5,
                cursor: "pointer",
            },
        });
    }

    function getNumbersFromP(p) {
        return $(p).text().replace(/[^0-9]/g,'');
    }

    // add btn under nav
    const $nav = $('nav');
    const $icon = getIcon()
    const $container = $('<div>', {
        css: {
            padding: 20,
            display: "none",
            textAlign: "center",
        }
    }).append($icon);
    $nav.after($container);
    $container.slideDown("slow");

    // get items json
    const $items = $('.trolleySummaryItem');
    const itemsJson = [];
    $items.each((i, item) => {
        const $item = $(item),
              $productDetails = $item.find('div.productDetails').find('p'),

              price = getNumbersFromP($productDetails[0]),
              quantity = getNumbersFromP($productDetails[1]),
              name = $item.find('.productDescription').text().trim();

        itemsJson.push({
            name: name,
            price: price,
            quantity: quantity,
        });
    });

    const $deliveryLi = $('.orderSummaryItems li:nth-child(2)'),
        deliveryPrice = getNumbersFromP($deliveryLi),

        delivery = {
            price: deliveryPrice,
        };

    // handle btn click
    handleResponse = (response) => {
        console.log("yay");
        console.log(response);
    };

    handleError = (response) => {
        console.log("oh no");
        console.log(response);
    };

    $('.jewify-order').on('click', () => {
        try {
            const sending = browser.runtime.sendMessage({
                items: {...itemsJson},
                delivery: delivery,
            });
            sending.then(handleResponse, handleError);
        } catch (e) {
            console.log(e);
        }
    });

});
