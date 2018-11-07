import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import IndexScene from './IndexScene'
import AuthLayout from './@auth/AuthLayout'
import CreateScene from './@create/CreateScene'

const LayoutScene = () =>
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={IndexScene} />
      <Route path="/auth" component={AuthLayout} />
      <Route path="/create" component={CreateScene} />
    </Switch>
  </React.Fragment>

export default connect()(LayoutScene)
