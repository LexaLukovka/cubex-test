import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import { Card } from 'semantic-ui-react'

const styles = {
  card: {
    padding: 30,
    minWidth: 500,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
}

class RegisterScene extends Component {
  componentWillMount() {
    document.title = 'Регистрация'
  }

  render() {
    return (
      <Card style={styles.card}>
        <div style={styles.title}><h4>ЗАРЕГИСТРИРОВАТЬСЯ</h4></div>
        <RegisterForm />
      </Card>
    )
  }
}

export default RegisterScene
