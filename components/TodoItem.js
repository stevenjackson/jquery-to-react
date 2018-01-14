class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  toggleComplete() {
    this.setState({ completed: !this.state.completed })
    maybeHideDeleteAll();
  }

  delete() {
    maybeHideDeleteAll();
  }

  render() {
    let flexStyle = {flex: '1 1 auto'};
    let todoText = this.props.text;
    if (this.state.completed) {
      todoText = <del>{this.props.text}</del>
    }
    return(
       <li className='list-group-item d-flex'>
         <div className='form-check' style={flexStyle} onChange={this.toggleComplete.bind(this)}>
           <input type='checkbox' className='form-check-input' id={this.props.todoId} />
           <label className='form-check-label' htmlFor={this.props.todoId}>
            {todoText}
           </label>
         </div>
         <button onClick={this.delete.bind(this)} className='btn btn-secondary btn-sm'>Delete</button>
   </li>
    )
  }
}
