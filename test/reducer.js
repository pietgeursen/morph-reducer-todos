var test = require('tape')
var freeze = require('deep-freeze')
var reducer = require('../reducer')

test('TOGGLE_DONE', function(t) {
  //arrange
  const state = {
    todos: [{
      description: 'buy eggs',
      done: false
    }, {
      description: 'invoice traject',
      done: false
    }]
  }
  freeze(state)
  //act
  const newState = reducer(state, {type: 'TOGGLE_DONE', payload: 0})
  //assert
  t.true(newState.todos[0].done)
  t.end()
})
