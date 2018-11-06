import React from 'react'
import { number, object } from 'prop-types'
import { Card, Feed } from 'semantic-ui-react'
import connector from './connector'

class AllPeople extends React.Component {
  handleSelectPerson = (index) => {
    const { actions } = this.props
    actions.people.find(index)
  }

  render() {
    const { index, general, contact } = this.props
    return (
      <Card onClick={() => this.handleSelectPerson(index)}>
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

AllPeople.propTypes = {
  actions: object.isRequired,
  index: number.isRequired,
  general: object.isRequired,
  contact: object.isRequired,
}

export default connector(AllPeople)
