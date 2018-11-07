import React from 'react'
import { func, number, object, shape, string } from 'prop-types'
import { Input, Message } from 'semantic-ui-react'

const FormikText = ({ field, form, ...props }) =>
  <div style={{ padding: '15px 0' }}>
    <Input
      {...props}
      {...field}
      style={{ width: '100%', padding: '0 20px' }}
      error={(form.submitCount > 0) && !!form.errors[field.name]}
    />
    {(form.submitCount > 0) && form.errors[field.name] &&
    <Message style={{ margin: '8px 20px 0 20px' }} error content={form.errors[field.name]} />}
  </div>

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
