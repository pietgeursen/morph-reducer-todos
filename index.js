const morph = require('morphdom')
var redux = require('redux')

const Todos = require('./todos')
const reducer = require('./reducer')

let initialState = { 
  todos: [{
    description: 'buy eggs',
    done: false
  }, {
    description: 'invoice traject',
    done: false
  }]
}


const store = redux.createStore(reducer, initialState)
const dispatch = store.dispatch

const updateView = () => {
  const state = store.getState()
  const newView = Todos(state.todos, dispatch)
  morph(initialView, newView)
}

store.subscribe(updateView)

const initialView = Todos(initialState.todos, dispatch)
document.body.appendChild(initialView)

