import React from 'react'
import { object } from 'prop-types'
import People from './People'
import Loading from '../Loading'
import connector from './connector'

class IndexScene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { actions } = this.props
    actions.people.load()
  }

  render() {
    const { peopleReducer: { loading, filterPeople } } = this.props
    if (loading) return <Loading />

    return <People people={filterPeople} />
  }
}

IndexScene.propTypes = {
  actions: object.isRequired,
  peopleReducer: object.isRequired,
}

export default connector(IndexScene)
