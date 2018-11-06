import React from 'react'
import { array } from 'prop-types'
import Person from './Person'

const index = ({ people }) =>
  <React.Fragment>
    {people && people.map((person, i) =>
      <Person key={i} person={person} />)
    }
  </React.Fragment>

index.propTypes = {
  people: array.isRequired,
}

export default index
