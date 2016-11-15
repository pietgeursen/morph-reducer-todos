var clone = require('clone')

var reducer = (state, action) => {
  const newState = clone(state)

  switch(action.type){
    case 'ADD_TODO':
      const newTodo = {description: action.payload, done: false}
      newState.todos.push(newTodo)
      return newState
    case 'TOGGLE_DONE':
      newState.todos[action.payload].done = !newState.todos[action.payload].done  
      return newState
  }

}

module.exports = reducer
