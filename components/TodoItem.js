class TodoItem extends React.Component {
  toggleComplete() {
    store.dispatch(todoCompleted(this.props.todo, !this.props.todo.completed));
  }

  delete() {
    store.dispatch(removeTodo(this.props.todo));
  }

  render() {
    const flexStyle = {flex: '1 1 auto'};
    const todo = this.props.todo;
    let todoText = todo.text;
    if (todo.completed) {
      todoText = <del>{todoText}</del>
    }
    return(
       <li className='list-group-item d-flex'>
         <div className='form-check' style={flexStyle} onChange={this.toggleComplete.bind(this)}>
           <input type='checkbox' className='form-check-input' id={todo.id} />
           <label className='form-check-label' htmlFor={todo.id}>
            {todoText}
           </label>
         </div>
         <button onClick={this.delete.bind(this)} className='btn btn-secondary btn-sm'>Delete</button>
   </li>
    )
  }
}
