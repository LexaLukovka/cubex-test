import React from 'react'
import { func, number, object, shape, string } from 'prop-types'
import { Input, Message } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'

const FormikPhone = ({ field, form, ...props }) =>
  <div style={{ padding: '15px 0' }}>
    <NumberFormat
      {...props}
      {...field}
      format="+38 (###) ###-####"
      mask="_"
      placeholder="+38 (099) 084-8975"
      type="tel"
      style={{ width: '100%', padding: '0 20px' }}
      customInput={Input}
      error={(form.submitCount > 0) && !!form.errors[field.name]}
    />
    {(form.submitCount > 0) && form.errors[field.name] &&
    <Message style={{ margin: '8px 20px 0 20px' }} error content={form.errors[field.name]} />}
  </div>

FormikPhone.propTypes = {
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

export default FormikPhone
