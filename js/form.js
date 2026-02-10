// Create Form Element
function createForm(editId, itemToEdit) {
    var $form = $("<form></form>");

    var hasItems = items.length > 0;

    $form.html(`
        <h2>grocery bud</h2>
        <div class="form-control">
            <input
                type="text"
                class="form-input"
                placeholder="e.g. eggs"
                value="${itemToEdit ? itemToEdit.name : ""}"
            />
            <button type="submit" class="btn">
                ${editId ? "edit item" : "add item"}
            </button>
        </div>
        ${hasItems ? '<button type="button" class="btn clear-btn">clear all</button>' : ''}
    `);

    $form.on("submit", function (e) {
        e.preventDefault();
        var $input = $form.find(".form-input");
        var value = $.trim($input.val());

        if (!value) {
            alert("Please provide value");
            return;
        }

        if (editId) {
            updateItemName(value);
        } else {
            addItem(value);
        }

        $input.val("");
    });

    // Add clear all functionality
    if (hasItems) {
        $form.find(".clear-btn").on("click", function () {
            if (confirm("Are you sure you want to clear all items?")) {
                items = [];
                setLocalStorage(items);
                render();
                alert("All items cleared!");
            }
        });
    }

    return $form;
}