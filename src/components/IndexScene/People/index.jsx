import React from 'react'
import { array, object } from 'prop-types'
import Search from './Search'
import Person from './Person'
import Details from './Details'

const People = ({ people, currentPeople }) =>
  <React.Fragment>
    <Search />
    <div style={{ display: 'flex' }}>
      <div className="person">
        {people && people.map((person, i) =>
          <Person key={i} person={person} />)
        }
      </div>
      <div>
        {currentPeople && <Details />}
      </div>
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
