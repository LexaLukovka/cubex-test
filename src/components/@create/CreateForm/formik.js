import { withFormik } from 'formik'
import * as Yup from 'yup'
import isEmpty from 'lodash/isEmpty'
import transformValidationApi from '../../../utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      firstName: Yup.string().required('Это поле является обязательным'),
      lastName: Yup.string().required('Это поле является обязательным'),
      phone: Yup.string().required('Это поле является обязательным'),
      title: Yup.string().required('Это поле является обязательным'),
      company: Yup.string().required('Это поле является обязательным'),
      email: Yup.string()
        .email('Неправильный email адрес!')
        .required('Это поле является обязательным'),
    }),

  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    company: '',
  }),

  handleSubmit: (form, { props: { actions, auth, history, createForm }, setErrors, setSubmitting }) => {

    const person = {
      ...form,
      avatar: isEmpty(!createForm) && createForm.pictures,
    }

    if (auth.user) {
      actions.people.create(person)
        .then(() => {
          setSubmitting(false)
          actions.people.addPictures({ pictures: [] })
          history.push('/')
        })
        .catch(errors => {
          setSubmitting(false)
          setErrors(transformValidationApi(errors))
        })
    } else history.push('/auth/login')
  },
  displayName: 'CreatePerson',
})

export default formik
