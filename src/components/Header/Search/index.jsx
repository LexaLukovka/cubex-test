import React from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { Icon, Input } from 'semantic-ui-react'
import { search } from '../../../redux/people/action'

const styles = {
  searchInput: {
    padding: 15,
  },
  searchIcon: {
    right: 15,
    border: 0,
  },
}

class Search extends React.Component {
  state = {
    searchValue: '',
  }

  componentDidUpdate() {
    const { dispatch } = this.props
    const { searchValue } = this.state
    dispatch(search(searchValue))
  }

  handleChange = event => {
    this.setState({ searchValue: event.target.value })
  }

  handleDelete = () => {
    this.setState({ searchValue: '' })
  }

  render() {
    const { searchValue } = this.state

    return (
      <div style={{ width: 'calc(100% - 400px)' }}>
        <Input icon placeholder="Search..." fluid style={styles.searchInput}>
          <input onChange={this.handleChange} value={searchValue} />
          <Icon
            link={!!searchValue}
            name={searchValue ? 'delete' : 'search'}
            onClick={this.handleDelete}
            style={styles.searchIcon}
          />
        </Input>
      </div>
    )
  }
}

Search.propTypes = {
  dispatch: func.isRequired,
}

export default connect()(Search)
