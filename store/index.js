let todoIdGenerator = 0;
const initialState = {
  hasCompletedItems: false,
  todos: []
};

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    todo: { id: todoIdGenerator++, text: text }
  }
}

function removeTodo(todo) {
  return {
    type: 'REMOVE_TODO',
    todo: todo
  }
}

function setHasCompletedItems(hasCompletedItems = false) {
  return {
    type: 'SET_HAS_COMPLETED_ITEMS',
    hasCompletedItems: hasCompletedItems
  };
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_HAS_COMPLETED_ITEMS':
      return Object.assign({}, state, {
        hasCompletedItems: action.hasCompletedItems
      });
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: state.todos.concat(action.todo)
      });
    case 'REMOVE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) =>
            todo.id != action.todo.id
        )
      });
    default:
      return state;
  }
}

var store = Redux.createStore(reducer);
