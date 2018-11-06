/* eslint-disable prefer-destructuring */
import React from 'react'
import { connect } from 'react-redux'
import { func, object } from 'prop-types'
import { Card, Feed } from 'semantic-ui-react'
import { find } from '../../../../redux/people/action'

class Persone extends React.Component {
  handleSelectPerson = (person) => {
    const { dispatch } = this.props
    dispatch(find(person))
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
  dispatch: func.isRequired,
  person: object.isRequired,
}

export default connect()(Persone)
