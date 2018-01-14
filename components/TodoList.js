class TodoList extends React.Component {
  render() {
    const items = this.props.todos.map((todo) =>
      <TodoItem key={todo.id} todoId={todo.id} text={todo.text} />
    );
    return(
      <ul id="todos" className="list-group my-2">
        {items}
      </ul>
    );
  }
}

var todos = [{ id: 1, text: "foo" }, { id: 2, text: "bar" }]

ReactDOM.render(<TodoList todos={todos}/>, document.querySelector('[data-react-component="TodoList"]'));
