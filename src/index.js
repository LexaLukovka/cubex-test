import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import  store  from './store'
import LayoutScene from './components/LayoutScene'
import 'semantic-ui-css/semantic.min.css'
import './assets/index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={LayoutScene} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'))
