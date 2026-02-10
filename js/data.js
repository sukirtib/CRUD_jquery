
var defaultGroceryItems = [
    { id: "1", name: "milk", completed: true },
    { id: "2", name: "bread", completed: true },
    { id: "3", name: "eggs", completed: false },
    { id: "4", name: "butter", completed: false },
];


function getInitialItems() {
    var storedItems = localStorage.getItem("grocery-list");
    if (storedItems) {
        return JSON.parse(storedItems);
    }
    return defaultGroceryItems;
}