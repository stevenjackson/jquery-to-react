function removeCheckedItems(e) {
    e.preventDefault(e);
    $('#todos input:checked').closest('li').remove();
    maybeHideDeleteAll();
}

function maybeHideDeleteAll() {
  var completedItems = $('#todos input:checked').length;
  store.dispatch(setHasCompletedItems(completedItems > 0));
}
