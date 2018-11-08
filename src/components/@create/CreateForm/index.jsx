import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, CardContent, Grid } from 'semantic-ui-react'

import Picture from './Picture'

import FormikText from './formik/FormikText'
import FormikPhone from './formik/FormikPhone'
import formik from './formik'
import { Field, Form } from 'formik'

import connector from '../connector'

const styles = {
  button: {
    margin: 30,
    width: '100%',
  },
  link: {
    marginTop: 10,
    textAlign: 'center',
  },
}

const CreateForm = () =>
  <Form>
    <CardContent>
      <Field
        label="Имя"
        name="firstName"
        component={FormikText}
        placeholder="Вася"
      />
      <Field
        label="Фамилия"
        name="lastName"
        component={FormikText}
        placeholder="Пупкин"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        component={FormikText}
        placeholder="email@example.com"
      />

      <Picture />

      <Field
        label="Номер телефона"
        name="phone"
        component={FormikPhone}
        placeholder="*******"
      />
      <Field
        label="Специальность"
        name="title"
        component={FormikText}
        placeholder="Программист"
      />
      <Field
        label="Компания"
        name="company"
        component={FormikText}
        placeholder="Cubex"
      />
    </CardContent>
    <Grid centered>
      <Button style={styles.button} type="submit" secondary>
        Сохранить
      </Button>
    </Grid>
  </Form>

export default connector(withRouter(formik(CreateForm)))
