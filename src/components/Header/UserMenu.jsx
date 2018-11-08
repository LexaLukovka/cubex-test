/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/sort-comp */
import React from 'react'
import { object } from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

import connector from './connector'

const styles = {
  root: {
    display: 'flex',
    padding: 15,
    justifyContent: 'center',
  },
  menu: {
    height: 38,
    marginTop: 0,
    padding: 0,
  },
  menuItem: {
    '&:focus': {
      outline: 'none',
    },
  },
  flex: {
    display: 'flex',
  },
  button: {
    height: 38,
  },
}

class UserMenu extends React.Component {
  logout = () => {
    const { actions, history } = this.props
    actions.auth.logout()
    history.push('/')
  }

  render() {
    const { auth } = this.props

    return (
      <div style={styles.root}>

        <div>
          {!auth.user &&
          <div style={styles.flex}>
            <Link to="/auth/login"><Button style={styles.button} secondary>Войти</Button></Link>
            <Link to="/auth/register"><Button style={styles.button} secondary>Зарегистрироваться</Button></Link>
          </div>
          }
        </div>

        {auth.user &&
        <Menu className="fullWidth" style={styles.menu}>
          <Dropdown className="fullWidth" item text={auth.user.name}>
            <Dropdown.Menu style={styles.menuItem} onClick={this.handleClose}>
              <Dropdown.Header onClick={this.logout}>Выйти</Dropdown.Header>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        }

      </div>
    )
  }
}

UserMenu.propTypes = {
  auth: object.isRequired,
  actions: object.isRequired,
  history: object.isRequired,
}

export default connector(withRouter(UserMenu))
