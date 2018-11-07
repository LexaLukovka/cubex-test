import React from 'react'
import Search from './Search'
import UserMenu from './UserMenu'

const Header = () =>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Search />
    <UserMenu />
  </div>

Header.propTypes = {}

export default Header
