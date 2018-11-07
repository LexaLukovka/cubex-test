/* eslint-disable react/sort-comp,padded-blocks,no-console */
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, CardContent } from 'semantic-ui-react'

import FormikText from '../../formik/FormikText'
import formik from './formik'
import { Field, Form } from 'formik'

import connector from '../../connector'

const LoginForm = () =>
  <Form>
    <CardContent>
      <Field
        label="Email"
        component={FormikText}
        name="email"
        type="email"
        placeholder="email@example.com"
      />
      <Field
        label="Пароль"
        name="password"
        type="password"
        component={FormikText}
        placeholder="*******"
      />
    </CardContent>
    <Button type="submit">
      Войти
    </Button>
    <Link to="/auth/register">
      <div style={{ textAlign: 'center' }}>Забыли пароль? | Нет аккаунта?</div>
    </Link>
  </Form>

export default connector(withRouter(formik(LoginForm)))
