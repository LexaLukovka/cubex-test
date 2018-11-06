import React from 'react'
import { object } from 'prop-types'

const index = ({ person }) =>
  <div>
    {console.log(person)}
  </div>

index.propTypes = {
  person: object.isRequired,
}

export default index
