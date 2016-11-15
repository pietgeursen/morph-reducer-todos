const test = require('tape')
var freeze = require('deep-freeze')

const reducer = require('../reducer')

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

  const expectedState = { 
    todos: [{
      description: 'buy eggs',
      done: true
    }, {
      description: 'invoice traject',
      done: false
    }]
  }
  const action = {type: 'TOGGLE_DONE', payload: 0}
  //act
  const newState = reducer(state, action)
  //assert
  t.deepEqual(newState, expectedState) 
  t.end()
})

test('ADD_TODO', function(t) {
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

  const expectedState = { 
    todos: [{
      description: 'buy eggs',
      done: false
    }, {
      description: 'invoice traject',
      done: false
    }, {
      description: 'eat cheese',
      done: false
    }]
  }
  const action = {type: 'ADD_TODO', payload: 'eat cheese'}
  //act
  const newState = reducer(state, action)
  //assert
  t.deepEqual(newState, expectedState) 
  t.end()
})
