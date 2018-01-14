class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  toggleComplete() {
    const completed = !this.state.completed;
    this.setState({ completed: completed })
    store.dispatch(todoCompleted(this.props.todo, completed));
  }

  delete() {
    store.dispatch(removeTodo(this.props.todo));
  }

  render() {
    let flexStyle = {flex: '1 1 auto'};
    let todoText = this.props.todo.text;
    if (this.state.completed) {
      todoText = <del>{todoText}</del>
    }
    return(
       <li className='list-group-item d-flex'>
         <div className='form-check' style={flexStyle} onChange={this.toggleComplete.bind(this)}>
           <input type='checkbox' className='form-check-input' id={this.props.todo.id} />
           <label className='form-check-label' htmlFor={this.props.todo.id}>
            {todoText}
           </label>
         </div>
         <button onClick={this.delete.bind(this)} className='btn btn-secondary btn-sm'>Delete</button>
   </li>
    )
  }
}
