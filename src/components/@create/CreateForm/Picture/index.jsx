/* eslint-disable no-underscore-dangle */
import React from 'react'
import { object } from 'prop-types'
import PictureUpload from '../../../PictureUpload'

import connector from './connector'

const styles = {
  image: {
    padding: 20,
    paddingBottom: 0,
  },
}

class Picture extends React.Component {
  handleUpload = (name, value) => {
    const { actions } = this.props
    actions.people.addPictures({ pictures: value })
  }

  render() {
    const { form } = this.props

    return (
      <div style={styles.image}>
        <PictureUpload
          name="pictures"
          pictures={form.pictures || []}
          onChange={this.handleUpload}
        />
      </div>
    )
  }
}

Picture.propTypes = {
  actions: object.isRequired,
  form: object,
}

Picture.defaultProps = {
  form: {},
}

export default connector(Picture)
