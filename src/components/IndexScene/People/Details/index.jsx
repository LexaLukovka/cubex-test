/* eslint-disable no-underscore-dangle */
import React from 'react'
import { object } from 'prop-types'
import { Card, Icon, Image } from 'semantic-ui-react'
import Carousel from '../../../Carousel'
import DeleteIcon from 'mdi-react/DeleteIcon'
import connector from '../connector'
import { isEmpty } from 'lodash'

const styles = {
  root: {
    width: '100%',
    minWidth: 300,
    maxWidth: 450,
    marginTop: 10,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
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
  delete: {
    color: '#ff0033',
  },
}

class Details extends React.Component {
  handleClose = () => {
    const { actions } = this.props
    actions.people.closeCurrent()
  }

  handleDelete = (id) => {
    const { actions } = this.props
    actions.people.deletePerson(id)
    actions.people.closeCurrent()
  }

  render() {
    const { user, currentPeople } = this.props
    const pathBack = 'http://localhost:3333/uploads/user.png'

    return (
      <Card style={styles.root}>
        {!isEmpty(currentPeople.avatar) ?
          <Carousel pictures={currentPeople.avatar} />
          :
          <Image src={pathBack} style={styles.image} />
        }
        <Icon name="close" size="large" style={styles.icon} onClick={this.handleClose} />
        <Card.Content>
          <Card.Header>
            <div style={styles.flex}>
              {`${currentPeople.firstName} ${currentPeople.lastName}`}
              {user && <DeleteIcon style={styles.delete} onClick={() => this.handleDelete(currentPeople._id)} />}
            </div>
          </Card.Header>
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
  actions: object.isRequired,
  user: object,
  currentPeople: object.isRequired,
}

Details.defaultProps = {
  user: null,
}

export default connector(Details)
