class UnconnectedTodoList extends React.Component {
  render() {
    const items = this.props.todos.map((todo) =>
      <TodoItem key={todo.id} todo={todo}/>
    );
    return(
      <ul id="todos" className="list-group my-2">
        {items}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

var TodoList = ReactRedux.connect(mapStateToProps)(UnconnectedTodoList);

ReactDOM.render(<TodoList store={store}/>, document.querySelector('[data-react-component="TodoList"]'));
