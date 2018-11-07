/* eslint-disable prefer-destructuring */
import React from 'react'
import { connect } from 'react-redux'
import { func, object } from 'prop-types'
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
  handleSelectPerson = (person) => {
    const { dispatch } = this.props
    dispatch(find(person))
  }

  render() {
    const { person, currentPeople } = this.props
    const general = person.general

    return (
      <Card
        style={person === currentPeople ? styles.chooseRoot : styles.root}
        onClick={() => this.handleSelectPerson(person)}
      >
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image={general.avatar} />
              <Feed.Content>
                <Feed.Summary>
                  {`${general.firstName} ${general.lastName}`}
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
  currentPeople: object,
}

Persone.defaultProps = {
  currentPeople: null,
}

export default connect()(Persone)
