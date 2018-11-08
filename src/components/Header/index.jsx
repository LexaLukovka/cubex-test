import React from 'react'
import { object } from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Search from './Search'
import UserMenu from './UserMenu'
import connector from './connector'

const styles = {
  link: {
    padding: 15,
  },
  button: {
    minHeight: 38,
  },
}

class Header extends React.Component {
  state = {
    location: this.props.location.pathname,
  }

  handleIndex = () => {
    this.setState({
      location: '/',
    })
  }

  handleCreate = () => {
    this.setState({
      location: '/create',
    })
  }

  render() {
    const { auth } = this.props
    const { location } = this.state

    return (
      <div className="flex">
        <Search />
        <div className="flex">
          {auth.user &&
          <div style={styles.link}>
            {location !== '/create' ?
              <Link to="/create">
                <Button className="fullWidth" style={styles.button} secondary onClick={this.handleCreate}>
                  Создать контакт
                </Button>
              </Link>
              :
              <Link to="/">
                <Button className="fullWidth" style={styles.button} secondary onClick={this.handleIndex}>
                  На главную
                </Button>
              </Link>
            }
          </div>
          }
          <UserMenu />
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  auth: object.isRequired,
  location: object.isRequired,
}

export default connector(withRouter(Header))
