/* eslint-disable prefer-destructuring,no-underscore-dangle,react/jsx-indent */
import React from 'react'
import { object, string } from 'prop-types'
import { Card, Feed } from 'semantic-ui-react'
import initialsFromUsername from '../../../../utils/initialsFromUsername'
import connector from '../connector'
import { isEmpty } from 'lodash'

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

class Person extends React.Component {
  handleSelectPerson = (id) => {
    const { actions } = this.props
    actions.people.find(id)
    actions.auth.closeAuth()
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
              {!isEmpty(person.avatar) ?
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

Person.propTypes = {
  actions: object.isRequired,
  person: object.isRequired,
  currentPeopleId: string,
}

Person.defaultProps = {
  currentPeopleId: null,
}

export default connector(Person)
