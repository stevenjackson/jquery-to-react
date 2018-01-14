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

function todoCompleted(todo) {
  return {
    type: 'TODO_COMPLETED',
    todo: todo
  };
}

function removeCompletedItems() {
  return {
    type: 'REMOVE_COMPLETED_ITEMS'
  }
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
    case 'TODO_COMPLETED':
      return Object.assign({}, state, {
        todos: state.todos.map(function(todo) {
            if(todo.id === action.todo.id) {
              return Object.assign({}, todo, { completed: true });
            } else {
              return todo;
            }
        })
      });
    case 'REMOVE_COMPLETED_ITEMS':
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) =>
            todo.completed !== true
        )
      });
    default:
      return state;
  }
}

var store = Redux.createStore(reducer);
