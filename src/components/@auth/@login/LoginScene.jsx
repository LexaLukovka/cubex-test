import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import LoginForm from './LoginForm'

const styles = {
  card: {
    padding: 30,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
}

class LoginScene extends Component {
  componentWillMount() {
    document.title = 'Войти'
  }

  render() {
    return (
      <Card style={styles.card}>
        <div style={styles.title}><h4>ВОЙТИ</h4></div>
        <LoginForm />
      </Card>
    )
  }
}

export default LoginScene
