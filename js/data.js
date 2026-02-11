
function getInitialItems() {
    var storedItems = localStorage.getItem("grocery-list");
    if (storedItems) {
        return JSON.parse(storedItems);
    }
    return defaultGroceryItems;
}