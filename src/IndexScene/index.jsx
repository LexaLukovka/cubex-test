import React from 'react'
import { array, object } from 'prop-types'
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
    const { people } = this.props
    console.log(people)
    return (
      <div>
        div
      </div>
    )

  }
}

IndexScene.propTypes = {
  actions: object.isRequired,
  people: array.isRequired,
}

export default connector(IndexScene)
