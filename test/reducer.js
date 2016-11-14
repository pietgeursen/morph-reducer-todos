var test = require('tape')
var freeze = require('deep-freeze')

var reducer = require('../reducer')

test('TOGGLE_DONE does not mutate the state passed in', function (t) {
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
  t.doesNotThrow(() => reducer(state, {type: 'TOGGLE_DONE', payload: 0}))
  t.end()
})

test('TOGGLE_DONE toggles the done value with at the correct index', function (t) {
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
  var newState = reducer(state, {type: 'TOGGLE_DONE', payload: 0})
  t.true(newState.todos[0].done)
  var newState = reducer(newState, {type: 'TOGGLE_DONE', payload: 0})
  t.false(newState.todos[0].done)
  t.end()
})
