import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import { Card } from 'semantic-ui-react'

const styles = {
  title: {
    textAlign: 'center',
  },
}

class RegisterScene extends Component {
  componentWillMount() {
    document.title = 'Регистрация'
  }

  render() {
    return (
      <Card>
        <div style={styles.title}>ЗАРЕГИСТРИРОВАТЬСЯ</div>
        <RegisterForm />
      </Card>
    )
  }
}

export default RegisterScene
