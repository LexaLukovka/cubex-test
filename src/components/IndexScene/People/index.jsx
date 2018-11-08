/* eslint-disable no-underscore-dangle */
import React from 'react'
import { array, object } from 'prop-types'
import { Grid } from 'semantic-ui-react'
import Person from './Person'
import Details from './Details'
import MyContact from './MyContact'
import MyDetails from './MyDetails'
import connector from './connector'

const styles = {
  flex: {
    display: 'flex',
  },
  detail: {
    width: '100%',
    margin: 0,
  },
}

const People = ({ auth, people, currentPeople }) =>
  <React.Fragment>
    <div style={styles.flex}>
      <div className={currentPeople || auth.isOpen ? 'personMobile' : 'person'}>
        {auth.user && <MyContact auth={auth.user} isOpen={auth.isOpen} />}
        {people && people.map((person, i) =>
          <Person key={i} person={person} currentPeopleId={currentPeople && currentPeople._id} />)}
      </div>
      <Grid centered style={styles.detail}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          {auth.user && (auth.isOpen && <MyDetails user={auth.user} />)}
          {currentPeople && <Details user={auth.user} currentPeople={currentPeople} />}
        </Grid.Column>
      </Grid>
    </div>
  </React.Fragment>

People.propTypes = {
  auth: object.isRequired,
  people: array.isRequired,
  currentPeople: object,
}

People.defaultProps = {
  currentPeople: null,
}

export default connector(People)
