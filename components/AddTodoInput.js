class AddTodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleInput(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    store.dispatch(addTodo(this.state.text));
    this.setState( {text: ""} );
  }

  render() {
    return (
      <form className="form-inline d-inline" id="addForm" onSubmit={this.handleSubmit.bind(this)} >
          <input id="todoInput" className="form-control" type="text" value={this.state.text} onChange={this.handleInput.bind(this)} />
          <button id="addTodo" type="submit" className="btn btn-primary mx-1">Add</button>
      </form>
    );
  }
}

ReactDOM.render(<AddTodoInput/>, document.querySelector('[data-react-component="AddTodoInput"]'));
