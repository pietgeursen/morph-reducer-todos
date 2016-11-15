const morph = require('morphdom')

const Todos = require('./todos')
const reducer = require('./reducer')

let state = { 
  todos: [{
    description: 'buy eggs',
    done: false
  }, {
    description: 'invoice traject',
    done: false
  }]
}

const todos = Todos(state.todos, dispatch)
document.body.appendChild(todos)

function dispatch(action) {
  console.log('in dispatch with action:' ,action)
  state = reducer(state, action) 
  const newTodos = Todos(state.todos)
  morph(todos, newTodos)
}

