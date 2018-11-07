import { withFormik } from 'formik'
import * as Yup from 'yup'
import transformValidationApi from '../../../utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      firstName: Yup.string().required('Это поле является обязательным'),
      lastName: Yup.string().required('Это поле является обязательным'),
      phone: Yup.string().required('Это поле является обязательным'),
      email: Yup.string()
        .email('Неправильный email адрес!')
        .required('Это поле является обязательным'),
      title: Yup.string().required('Это поле является обязательным'),
      company: Yup.string().required('Это поле является обязательным'),
    }),
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    company: '',
  }),

  handleSubmit: (form, { props: { actions, history }, setErrors, setSubmitting }) => {
    actions.people.create(form)
      .then(() => {
        setSubmitting(false)
        history.push('/')
      })
      .catch(errors => {
        setSubmitting(false)
        setErrors(transformValidationApi(errors))
      })
  },
  displayName: 'CreatePerson',
})

export default formik
