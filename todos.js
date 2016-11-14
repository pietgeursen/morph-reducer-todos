const h = require('hyperscript')

module.exports = Todos

function Todos (listOfTodos, clickHandler) {
  return h('ul', listOfTodos.map( (todo, index) => {
    return Todo(todo, index, clickHandler)
  }))
}

function Todo (todoItem, index, clickHandler) {
  const { description, done } = todoItem
  const customClass = done ? 'done' : ''

  return h('li', 
    {
      className: customClass,
      onclick: () => clickHandler(index)
    },
    `[${index}] ${description}`)
}


