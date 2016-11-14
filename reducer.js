var clone = require('clone')
module.exports = reducer

function reducer (state, action) {
  const newState = clone(state)
  switch (action.type) {
    case 'TOGGLE_DONE':
      newState.todos[action.payload].done = !newState.todos[action.payload].done
      return newState
  }
  return state
}
