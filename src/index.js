import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import  store  from './store'
import IndexScene from './components/IndexScene'
import 'semantic-ui-css/semantic.min.css'
import './assets/index.css'

ReactDOM.render(
  <Provider store={store}>
    <IndexScene />
  </Provider>,
  document.getElementById('root'))
