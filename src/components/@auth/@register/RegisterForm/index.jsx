/* eslint-disable react/sort-comp,padded-blocks,no-console */
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, CardContent, Grid } from 'semantic-ui-react'

import FormikText from '../../formik/FormikText'
import FormikPhone from '../../formik/FormikPhone'
import formik from './formik'
import { Field, Form } from 'formik'

import connector from '../../connector'

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

const RegisterForm = () =>
  <Form>
    <CardContent>
      <Field
        label="Имя и фамилия"
        component={FormikText}
        name="name"
        type="name"
        placeholder="Вася Пупкин"
      />
      <Field
        label="Email"
        component={FormikText}
        name="email"
        type="email"
        placeholder="email@example.com"
      />
      <Field
        label="Номер телефона"
        name="phone"
        component={FormikPhone}
        placeholder="*******"
      />
      <Field
        label="Пароль"
        name="password"
        type="password"
        component={FormikText}
        placeholder="*******"
      />
    </CardContent>
    <Grid centered>
      <Button style={styles.button} type="submit" secondary>
        Зарегистрироваться
      </Button>
    </Grid>
    <Link to="/auth/login">
      <div style={styles.link}>Уже есть аккаунт? | Войти</div>
    </Link>
  </Form>

export default connector(withRouter(formik(RegisterForm)))
