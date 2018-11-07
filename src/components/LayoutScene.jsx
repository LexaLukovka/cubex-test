import React from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import IndexScene from './IndexScene'
import CreateScene from './@create/CreateScene'
import { firstCreate } from '../redux/people/action'

class LayoutScene extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(firstCreate())
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={IndexScene} />
          <Route path="/create" component={CreateScene} />
        </Switch>
      </React.Fragment>
    )
  }
}

LayoutScene.propTypes = {
  dispatch: func.isRequired,
}

export default connect()(LayoutScene)
