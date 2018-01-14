function maybeHideDeleteAll() {
  var completedItems = $('#todos input:checked').length;
  store.dispatch(setHasCompletedItems(completedItems > 0));
}
