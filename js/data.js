var groceryItems = [
  { id: "1", name: "milk", completed: true },
  { id: "2", name: "bread", completed: true },
  { id: "3", name: "eggs", completed: false },
  { id: "4", name: "butter", completed: false },
];

function createItems(itemsArray) {
  var $container = $('<div class="items"></div>');

  $.each(itemsArray, function (index, item) {
    var $itemElement = createSingleItem(item);
    $container.append($itemElement);
  });

  return $container;
}

