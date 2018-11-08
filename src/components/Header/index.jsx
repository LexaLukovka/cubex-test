import React from 'react'
import { object, string } from 'prop-types'
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

const Header = ({ auth, locations }) =>
  <div className="flex">
    <Search />
    <div className="flex">
      {auth.user &&
      <div style={styles.link}>
        {locations === '/create' &&
        <Link to="/">
          <Button className="fullWidth" style={styles.button} secondary>
            На главную
          </Button>
        </Link>
        }
        {locations === '/' &&
        <Link to="/create">
          <Button className="fullWidth" style={styles.button} secondary>
            Создать контакт
          </Button>
        </Link>
        }
      </div>
      }
      <UserMenu />
    </div>
  </div>

Header.propTypes = {
  auth: object.isRequired,
  locations: string.isRequired,
}

export default connector(withRouter(Header))
