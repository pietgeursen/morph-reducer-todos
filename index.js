const morph = require('morphdom')

const Todos = require('./todos')

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
  console.log(index, 'toggling DONE')
  state.todos[index].done = !state.todos[index].done

  const newTodos = Todos(state.todos)
  morph(todos, newTodos)
}

