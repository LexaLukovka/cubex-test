/* eslint-disable prefer-destructuring,no-underscore-dangle */
import React from 'react'
import { connect } from 'react-redux'
import { func, object, string } from 'prop-types'
import { Card, Feed } from 'semantic-ui-react'
import { find } from '../../../../redux/people/action'

const styles = {
  root: {
    margin: 0,
  },
  chooseRoot: {
    margin: 0,
    background: '#f0f0f0',
  },
}

class Persone extends React.Component {
  handleSelectPerson = (id) => {
    const { dispatch } = this.props
    dispatch(find(id))
  }

  render() {
    const { person, currentPeopleId } = this.props

    return (
      <Card
        style={person._id === currentPeopleId ? styles.chooseRoot : styles.root}
        onClick={() => this.handleSelectPerson(person._id)}
      >
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image={person.avatar} />
              <Feed.Content>
                <Feed.Summary>
                  {`${person.firstName} ${person.lastName}`}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    )
  }
}

Persone.propTypes = {
  dispatch: func.isRequired,
  person: object.isRequired,
  currentPeopleId: string,
}

Persone.defaultProps = {
  currentPeopleId: null,
}

export default connect()(Persone)
