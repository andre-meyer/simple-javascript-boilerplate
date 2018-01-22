import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App'

import 'style/style.scss'

/* global document */
const rootElement = document.getElementById('root')

const render = Component => 
  ReactDOM.render(
    <Component />,
    rootElement
  )


render(App)

if (module.hot) {
  module.hot.accept('./index', () => render(require('./index').default))
}
