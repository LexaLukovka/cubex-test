import React from 'react'
import { number, string } from 'prop-types'
import { Icon, Image, Loader } from 'semantic-ui-react'

const styles = {
  root: {
    margin: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    width: 70,
    color: 'rgba(0,0,0,0.8)',
    height: 70,
    border: '2px solid rgba(0,0,0,0.8)',
    borderRadius: 3,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  },
}

const AddPicture = ({ loadingPicture, percent, ...props }) =>
  <Image {...props} style={styles.root} src={loadingPicture}>
    {percent ? <Loader value={percent} /> : <Icon name="add" style={{ margin: 0 }} />}
  </Image>

AddPicture.propTypes = {
  loadingPicture: string.isRequired,
  percent: number.isRequired,
}

export default AddPicture
