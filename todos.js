const h = require('hyperscript')

module.exports = Todos

function Todos (listOfTodos, dispatch) {
  return h('ul', listOfTodos.map( (todo, index) => {
    return Todo(todo, index, dispatch)
  }))
}

function Todo (todoItem, index, dispatch) {
  const { description, done } = todoItem
  const customClass = done ? 'done' : ''

  return h('li', 
    {
      className: customClass,
      onclick: () => dispatch({type: 'TOGGLE_DONE', payload: index})
    },
    `[${index}] ${description}`)
}


