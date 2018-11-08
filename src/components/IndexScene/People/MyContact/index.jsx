/* eslint-disable prefer-destructuring,no-underscore-dangle */
import React from 'react'
import { bool, object } from 'prop-types'
import { Card, Feed, Icon } from 'semantic-ui-react'
import connector from '../connector'

const styles = {
  root: {
    margin: 0,
    marginBottom: 10,
  },
  chooseRoot: {
    margin: 0,
    background: '#f0f0f0',
    marginBottom: 10,
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

class MyContact extends React.Component {
  handleSelectPerson = (id) => {
    const { actions } = this.props
    actions.auth.openAuth(id)
    actions.people.closeCurrent()
  }

  render() {
    const { auth, isOpen } = this.props

    return (
      <Card
        style={isOpen ? styles.chooseRoot : styles.root}
        onClick={() => this.handleSelectPerson(auth._id)}
      >
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label
                image={<Icon name="user circle" />}
              />
              <Feed.Content>
                <Feed.Summary>
                  MY NUMBER
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    )
  }
}

MyContact.propTypes = {
  actions: object.isRequired,
  auth: object.isRequired,
  isOpen: bool.isRequired,
}

export default connector(MyContact)
