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

const todos = Todos(state.todos, toggleDone)
document.body.appendChild(todos)

function toggleDone (index) {
  state = reducer(state, {type: 'TOGGLE_DONE', payload: index})

  const newTodos = Todos(state.todos)
  morph(todos, newTodos)
}
