
function createItems(itemsArray) {
    var $container = $('<div class="items"></div>');

    if (itemsArray.length === 0) {
        $container.html('<p class="empty-list">Your list is empty</p>');
        return $container;
    }

    $.each(itemsArray, function (index, item) {
        var $itemElement = createSingleItem(item);
        $container.append($itemElement);
    });

    return $container;
}