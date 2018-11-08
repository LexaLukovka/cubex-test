/* eslint-disable function-paren-newline */
import React from 'react'
import { array, func } from 'prop-types'
import Thumbnail from './Thumbnail'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}

class PictureList extends React.Component {
  delete = (picture_url) => () => {
    this.props.onDelete(picture_url)
  }

  render() {
    const { pictures } = this.props
    const pathBack = 'http://localhost:3333'
    return (
      <div style={styles.root}>
        {pictures.map(picture_url =>
          <Thumbnail
            key={picture_url}
            style={styles.photo}
            onDelete={this.delete(picture_url)}
            src={`${pathBack}${picture_url}`}
          />,
        )}
      </div>
    )
  }
}

PictureList.propTypes = {
  pictures: array.isRequired,
  onDelete: func.isRequired,
}

export default PictureList
