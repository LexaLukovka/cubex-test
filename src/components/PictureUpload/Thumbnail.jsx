import React from 'react'
import { func, string } from 'prop-types'
import { Image } from 'semantic-ui-react'
import CloseIcon from 'mdi-react/CloseIcon'

const styles = {
  root: {
    position: 'relative',
  },
  overlay: {
    cursor: 'pointer',
    opacity: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    display: 'flex',
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    '&:hover': {
      opacity: 1,
    },
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5%',

    zIndex: 1,
  },
  overlayIcon: {
    color: 'white',
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: '5%',
    margin: 2,
  },
}

const Thumbnail = ({ src, onDelete }) =>
  <div style={styles.root}>
    <div style={styles.overlay}>
      <CloseIcon onClick={onDelete} style={styles.overlayIcon} />
    </div>
    <Image
      src={src}
      style={styles.photo}
    />
  </div>

Thumbnail.propTypes = {
  src: string.isRequired,
  onDelete: func.isRequired,
}

export default Thumbnail
