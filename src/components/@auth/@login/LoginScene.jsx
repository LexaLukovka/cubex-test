import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import LoginForm from './LoginForm'

const styles = {
  title: {
    textAlign: 'center',
  },
}

class LoginScene extends Component {
  componentWillMount() {
    document.title = 'Войти'
  }

  render() {
    return (
      <Card>
        <div style={styles.title}>ВОЙТИ</div>
        <LoginForm />
      </Card>
    )
  }
}

export default LoginScene
