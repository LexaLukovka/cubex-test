import React from 'react'
import { object } from 'prop-types'
import { Card, Icon, Image } from 'semantic-ui-react'
import connector from '../connector'

const styles = {
  root: {
    width: '100%',
    minWidth: 300,
    maxWidth: 450,
    marginTop: 10,
  },
  image: {
    margin: 0,
    width: '100%',
    background: 'inherit',
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: 8,
  },
}

class MyDetails extends React.Component {
  handleClose = () => {
    const { actions } = this.props
    actions.auth.closeAuth()
  }

  render() {
    const { user } = this.props
    const pathBack = 'http://localhost:3333/uploads/auth.png'

    return (
      <Card style={styles.root}>
        <Image src={pathBack} style={styles.image} />
        <Icon name="close" size="large" style={styles.icon} onClick={this.handleClose} />
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>{user.phone}</Card.Meta>
          <Card.Meta>{user.email}</Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

MyDetails.propTypes = {
  actions: object.isRequired,
  user: object.isRequired,
}

export default connector(MyDetails)
