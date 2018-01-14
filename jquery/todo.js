// This exists to keep the checkbox & label in sync
var uniqueCounter = 0;

// template for the todo items
function todoCreator(todoText, completed) {
    uniqueCounter = uniqueCounter + 1;
    var todoId = 'todo' + uniqueCounter;
    return '<li class="list-group-item d-flex">' +
        '  <div class="form-check" style="flex: 1 1 auto;" onchange="toggleComplete(this);maybeHideDeleteAll();">' +
        '    <input type="checkbox" class="form-check-input" id="' + todoId + '">' +
        '    <label class="form-check-label" for="' + todoId + '">' +
        (completed ? '<del>' + todoText + '</del>' : todoText) +
        '    </label>' +
        '  </div>' +
        '  <button onclick="deleteTodo(this);maybeHideDeleteAll();" class="btn btn-secondary btn-sm">Delete</button>' +
        '</li>';
}

// Add a todo to the list
function addTodo(todoText) {
    var item = todoCreator(todoText);
    $('#todos').append(item);
}

// Remove the todo entirely
function deleteTodo(todo) {
    $(todo).parent().remove();
}

// Strike out the todo item when it is completed, remove strike when it is incomplete
function toggleComplete(todo) {
    var label = $(todo).find('label');
    if ($(todo).find('input').prop('checked')) {
        label.html('<del>' +
            label.text() +
            '</del>');
    } else {
        label.html(label.text());
    }
}

function  removeCheckedItems(e) {
    e.preventDefault(e);
    $('#todos input:checked').closest('li').remove();
    maybeHideDeleteAll();
}

function maybeHideDeleteAll() {
  var completedItems = $('#todos input:checked').length;
  store.dispatch(setHasCompletedItems(completedItems > 0));
  ReactDOM.render(
    React.createElement(RemoveCompletedButton, { show: completedItems > 0 }),
    document.querySelector('[data-react-component="RemoveCompletedButton"]')
  );
}
