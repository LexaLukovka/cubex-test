import React from 'react'
import { number, object } from 'prop-types'
import AllPeople from './AllPeople'

const Person = ({ person, index }) =>
  <div>
    <AllPeople
      index={index}
      general={person.general}
      contact={person.contact}
    />
  </div>

Person.propTypes = {
  index: number.isRequired,
  person: object.isRequired,
}

export default Person
