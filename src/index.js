import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App'

import reducers from 'reducers'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { addPlugin } from 'actions/plugins'

import 'style/style.scss'

const enhancer = composeWithDevTools(
  applyMiddleware(thunk)
)

const store = createStore(reducers, enhancer)
//store.dispatch(addPlugin({ id: 123, name: 'test' }))
//console.log(store)

/* global document */
const rootElement = document.getElementById('root')

const render = Component => 
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootElement
  )


render(App)

if (module.hot) {
  module.hot.accept('./index', () => render(require('./index').default))
}
