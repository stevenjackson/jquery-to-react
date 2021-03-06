class UnconnectedRemoveCompletedButton extends React.Component {
  render() {
    if(this.props.show) {
      return(
        <button id="clearCompleted" className="btn btn-outline-secondary mx-1"  onClick={this.removeCheckedItems}>
            Remove Completed
        </button>
      );
    } else {
      return null;
    }
  }

  removeCheckedItems() {
    store.dispatch(removeCompletedItems())
  }
}

function mapStateToProps(state) {
  return {
    show: state.todos.find((todo) =>
      todo.completed
    )
  }
}

var RemoveCompletedButton = ReactRedux.connect(mapStateToProps)(UnconnectedRemoveCompletedButton);

ReactDOM.render(<RemoveCompletedButton store={store}/>, document.querySelector('[data-react-component="RemoveCompletedButton"]'));
