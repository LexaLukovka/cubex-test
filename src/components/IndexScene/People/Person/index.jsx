import React from 'react'
import { object } from 'prop-types'
import AllPeople from './AllPeople'

const Person = ({ person }) =>
  <div>
    <AllPeople
      general={person.general}
      job={person.job}
      contact={person.contact}
    />
  </div>

Person.propTypes = {
  person: object.isRequired,
}

export default Person
