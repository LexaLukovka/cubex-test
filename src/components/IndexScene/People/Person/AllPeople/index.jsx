import React from 'react'
import { object } from 'prop-types'
import { Card, Feed } from 'semantic-ui-react'

const AllPeople = ({ general, contact, job }) =>
  <Card>
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

AllPeople.propTypes = {
  general: object.isRequired,
  contact: object.isRequired,
  job: object.isRequired,
}

export default AllPeople
