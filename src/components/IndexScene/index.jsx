import React from 'react'
import { object } from 'prop-types'
import People from './People'
import Loading from '../Loading'
import connector from './connector'

class IndexScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.people.load()
  }

  render() {
    const { peopleReducer: { loading } } = this.props
    if (loading) return <Loading />

    return <People />
  }
}

IndexScene.propTypes = {
  actions: object.isRequired,
  peopleReducer: object.isRequired,
}

export default connector(IndexScene)
