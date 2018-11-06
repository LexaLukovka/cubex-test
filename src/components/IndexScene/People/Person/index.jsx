/* eslint-disable prefer-destructuring */
import React from 'react'
import { object } from 'prop-types'
import { Card, Feed } from 'semantic-ui-react'
import connector from './connector'

class Persone extends React.Component {
  handleSelectPerson = (person) => {
    const { actions } = this.props
    actions.people.find(person)
  }

  render() {
    const { person } = this.props
    const general = person.general
    return (
      <Card style={{ margin: 0 }} onClick={() => this.handleSelectPerson(person)}>
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
  actions: object.isRequired,
  person: object.isRequired,
}

export default connector(Persone)
