/* eslint-disable prefer-destructuring,no-underscore-dangle */
import React from 'react'
import { connect } from 'react-redux'
import { func, object, string } from 'prop-types'
import { Card, Feed } from 'semantic-ui-react'
import { find } from '../../../../redux/people/action'
import initialsFromUsername from '../../../../utils/initialsFromUsername'

const styles = {
  root: {
    margin: 0,
  },
  chooseRoot: {
    margin: 0,
    background: '#f0f0f0',
  },
  name: {
    textAlign: 'center',
    alignSelf: 'center',
    height: 35,
    borderRadius: '50%',
    background: 'silver',
    fontWeight: 500,
    paddingTop: 7,
  },
}

class Persone extends React.Component {
  handleSelectPerson = (id) => {
    const { dispatch } = this.props
    dispatch(find(id))
  }

  render() {
    const { person, currentPeopleId } = this.props
    const name = `${person.firstName} ${person.lastName}`
    const pathBack = 'http://localhost:3333'

    return (
      <Card
        style={person._id === currentPeopleId ? styles.chooseRoot : styles.root}
        onClick={() => this.handleSelectPerson(person._id)}
      >
        <Card.Content>
          <Feed>
            <Feed.Event>
              {person.avatar ?
                <Feed.Label
                  image={!person.avatar[0].indexOf('/uploads') ?
                    `${pathBack}${person.avatar[0]}` : person.avatar[0]}
                />
                :
                    <Feed.Label style={styles.name}>{initialsFromUsername(name)}</Feed.Label>
              }
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
