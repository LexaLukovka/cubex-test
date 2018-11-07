import React from 'react'
import { connect } from 'react-redux'
import { func, object } from 'prop-types'
import { Card, Icon, Image } from 'semantic-ui-react'
import { closeCurrent } from '../../../../redux/people/action'

const styles = {
  root: {
    width: '100%',
    minWidth: 300,
    maxWidth: 450,
    marginTop: 10,
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
    const { dispatch } = this.props
    dispatch(closeCurrent())
  }

  render() {
    const { currentPeople } = this.props
    return (
      <Card style={styles.root}>
        {currentPeople.avatar && <Image src={currentPeople.avatar} style={styles.image} />}
        <Icon name="close" size="large" style={styles.icon} onClick={this.handleClose} />
        <Card.Content>
          <Card.Header>{`${currentPeople.firstName} ${currentPeople.lastName}`}</Card.Header>
          <Card.Meta>{currentPeople.phone}</Card.Meta>
          <Card.Meta>{currentPeople.email}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>{currentPeople.title}</Card.Description>
          <Card.Description>{currentPeople.company}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

Details.propTypes = {
  dispatch: func.isRequired,
  currentPeople: object.isRequired,
}

export default connect()(Details)
