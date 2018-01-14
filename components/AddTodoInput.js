class AddTodoInput extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var input = $("input#todoInput");
    addTodo(input.val());
    input.val("");
  }
  render() {
    return (
      <form className="form-inline d-inline" id="addForm" onSubmit="handleSubmit">
          <input id="todoInput" className="form-control" type="text"/>
          <button id="addTodo" type="submit" className="btn btn-primary mx-1">Add</button>
      </form>
    );
  }
}

ReactDOM.render(<AddTodoInput/>, document.querySelector('[data-react-component="AddTodoInput"]'));
