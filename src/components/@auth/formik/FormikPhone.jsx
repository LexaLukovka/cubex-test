import React from 'react'
import { func, number, object, shape, string } from 'prop-types'
import { Input, Message } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'

const FormikPhone = ({ field, form, ...props }) =>
  <React.Fragment>
    <NumberFormat
      {...props}
      {...field}
      format="+38 (###) ###-####"
      mask="_"
      placeholder="+38 (068) 318-8524"
      type="tel"
      customInput={Input}
      error={(form.submitCount > 0) && !!form.errors[field.name]}
    />
    {(form.submitCount > 0) && form.errors[field.name] && <Message error content={form.errors[field.name]} />}
  </React.Fragment>

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
