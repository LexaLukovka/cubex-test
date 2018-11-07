/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/sort-comp */
import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

import connector from './connector'

const styles = {
  root: {
    display: 'flex',
    padding: 15,
  },
  menu: {
    height: 38,
    marginTop: 0,
  },
  menuItem: {
    '&:focus': {
      outline: 'none',
    },
  },
  flex: {
    display: 'flex',
  },
}

class UserMenu extends React.Component {
  logout = () => {
    const { actions } = this.props
    actions.auth.logout()
  }

  render() {
    const { auth } = this.props

    return (
      <div style={styles.root}>

        <div>
          {!auth.user &&
          <div style={styles.flex}>
            <Link to="/auth/login"><Button secondary>Войти</Button></Link>
            <Link to="/auth/register"><Button secondary>Зарегистрироваться</Button></Link>
          </div>
          }
        </div>

        {auth.user &&
        <Menu style={styles.menu}>
          <Dropdown item text={auth.user.name}>
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
}

export default connector(UserMenu)
