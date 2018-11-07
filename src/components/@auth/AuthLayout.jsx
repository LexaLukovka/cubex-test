import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import RegisterScene from './@register/RegisterScene'
import LoginScene from './@login/LoginScene'

const styles = {
  root: {
    height: '100%',
    padding: '0 5px',
    minHeight: 500,
    maxWidth: 500,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  scene: {
    flexGrow: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}

const AuthLayout = () =>
  <div style={styles.root}>
    <div style={styles.scene}>
      <Switch>
        <Route exact path="/auth/register" component={RegisterScene} />
        <Route exact path="/auth/login" component={LoginScene} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  </div>

export default AuthLayout
