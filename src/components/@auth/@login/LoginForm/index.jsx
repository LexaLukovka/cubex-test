/* eslint-disable react/sort-comp,padded-blocks,no-console */
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, CardContent, Grid } from 'semantic-ui-react'

import FormikText from '../../formik/FormikText'
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
    <Grid centered>
      <Button style={styles.button} type="submit" secondary>
        Войти
      </Button>
    </Grid>
    <Link to="/auth/register">
      <div style={styles.link}>Забыли пароль? | Нет аккаунта?</div>
    </Link>
  </Form>

export default connector(withRouter(formik(LoginForm)))
