import React from 'react'
import { array, object } from 'prop-types'
import { Grid } from 'semantic-ui-react'
import Person from './Person'
import Details from './Details'

const styles = {
  flex: {
    display: 'flex',
  },
  detail: {
    width: '100%',
    margin: 0,
  },
}

const People = ({ people, currentPeople }) =>
  <React.Fragment>
    <div style={styles.flex}>
      <div className={currentPeople ? 'personMobile' : 'person'}>
        {people && people.map((person, i) =>
          <Person key={i} person={person} currentPeople={currentPeople} />)
        }
      </div>
      <Grid centered style={styles.detail}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          {currentPeople && <Details currentPeople={currentPeople} />}
        </Grid.Column>
      </Grid>
    </div>
  </React.Fragment>

People.propTypes = {
  people: array.isRequired,
  currentPeople: object,
}

People.defaultProps = {
  currentPeople: null,
}

export default People
