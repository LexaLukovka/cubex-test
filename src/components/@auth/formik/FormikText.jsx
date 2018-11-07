import React from 'react'
import { func, number, object, shape, string } from 'prop-types'
import { Input, Message } from 'semantic-ui-react'

const FormikText = ({ field, form, ...props }) =>
  <React.Fragment>
    <Input
      {...props}
      {...field}
      error={(form.submitCount > 0) && !!form.errors[field.name]}
    />
    {form.submitCount > 0 && <Message error content={form.errors[field.name]} />}
  </React.Fragment>

FormikText.propTypes = {
  field: shape({
    name: string,
    value: string,
    onChange: func,
    onBlur: func,
  }).isRequired,
  form: shape({
    errors: object,
    submitCount: number,
  }).isRequired,
}

export default FormikText
