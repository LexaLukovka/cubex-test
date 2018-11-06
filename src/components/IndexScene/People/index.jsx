import React from 'react'
import { array } from 'prop-types'
import Search from './Search'
import Person from './Person'
import Details from './Details'

const index = ({ people }) =>
  <React.Fragment>
    <Search />
    {people && people.map((person, i) =>
      <Person key={i} index={i} person={person} />)
    }
    <Details />
  </React.Fragment>

index.propTypes = {
  people: array.isRequired,
}

export default index
