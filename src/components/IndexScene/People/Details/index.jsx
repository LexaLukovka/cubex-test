import React from 'react'
import { object } from 'prop-types'
import { Card, Icon, Image } from 'semantic-ui-react'
import connector from './connector'

const styles = {
  root: {
    marginLeft: 100,
    minWidth: 300,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: 8,
  },
}

class Details extends React.Component {
  handleClose = () => {
    const { actions } = this.props
    actions.people.closeCurrent()
  }

  render() {
    const { current: { general, job, contact } } = this.props
    return (
      <Card style={styles.root}>
        <Image src={general.avatar} style={styles.image} />
        <Icon name="close" size="large" style={styles.icon} onClick={this.handleClose} />
        <Card.Content>
          <Card.Header>{`${general.firstName} ${general.lastName}`}</Card.Header>
          <Card.Meta>{contact.phone}</Card.Meta>
          <Card.Meta>{contact.email}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>{job.company}</Card.Description>
          <Card.Description>{job.title}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

Details.propTypes = {
  actions: object.isRequired,
  current: object.isRequired,
}

export default connector(Details)
