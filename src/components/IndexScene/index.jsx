import React from 'react'
import { array, bool, object } from 'prop-types'
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
    const { loading, people } = this.props
    if (loading) return <Loading />

    return people && people.map((person, index) =>
      <People key={index} person={person} />)
  }
}

IndexScene.propTypes = {
  actions: object.isRequired,
  loading: bool.isRequired,
  people: array.isRequired,
}

export default connector(IndexScene)
