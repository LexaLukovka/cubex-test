import React from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import CreateForm from './CreateForm'
import connector from './connector'

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
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 30,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
}

class CreateScene extends React.Component {
  componentWillMount() {
    document.title = 'Создание'
  }

  componentDidMount() {
    const { actions, auth, history } = this.props
    if (!auth.user) history.push('/auth/login')

    actions.location.index('/create')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.location.index('/')
  }

  render() {

    return (
      <div style={styles.root}>
        <Card style={styles.card}>
          <div style={styles.title}><h3>Создать контакт</h3></div>
          <CreateForm />
        </Card>
      </div>
    )

  }
}

CreateScene.propTypes = {
  auth: object.isRequired,
  history: object.isRequired,
  actions: object.isRequired,
}

export default connector(withRouter(CreateScene))
