/* eslint-disable function-paren-newline,react/prefer-stateless-function,no-return-assign */
import React from 'react'
import Http from '../../services/Http'
import { array, func, string } from 'prop-types'
import { Message } from 'semantic-ui-react'
import PictureList from './PictureList'
import AddPicture from './AddPicture'

const styles = {
  root: {
    marginBottom: 10,
  },
  fileInput: {
    opacity: 0,
    position: 'absolute',
  },
  pictureList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}

class PictureUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: props.pictures,
      loadingPicture: '',
      percent: 0,
    }

    this.handleClickInput = this.handleClickInput.bind(this)
  }

  add = (image) => {
    if (image.type.match(/image.*/)) {
      const reader = new FileReader()
      reader.onload = () => {
        this.setState({ loadingPicture: reader.result })
      }
      reader.readAsDataURL(image)
    }
  }

  upload = async (image) => {
    const data = new FormData()
    data.append('file', image, image.name)

    const response = await Http.post(this.props.url, data, {
      onUploadProgress: (progressEvent) => {
        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        this.setState({
          percent,
          loadingPicture: '',
        })
      },
    })

    const { pictures } = this.state

    pictures.push(response.url)
    this.setState({ pictures, percent: 0 })
  }

  handleAdd = async (e) => {
    const { onChange, name } = this.props
    const image = e.target.files[0]
    this.add(image)
    await this.upload(image)

    onChange(name, this.state.pictures)
  }

  handleBlur = () => {
    this.props.onBlur(this.props.name, true)
  }

  handleDelete = (picture_url) => {
    const { onChange, name } = this.props
    const pictures = this.state.pictures.filter(picture => picture !== picture_url)
    this.setState({ pictures })

    onChange(name, pictures)
  }

  handleClickInput() {
    this.fileInput.click()
  }

  render() {
    const { name, helperText } = this.props
    const { pictures, loadingPicture, percent } = this.state

    return (
      <div style={styles.root}>
        <div style={styles.pictureList}>
          <PictureList pictures={pictures} onDelete={this.handleDelete} />
          <AddPicture
            loadingPicture={loadingPicture}
            percent={percent}
            onClick={this.handleClickInput}
          />
        </div>

        <input
          style={styles.fileInput}
          ref={input => this.fileInput = input}
          onChange={this.handleAdd}
          onBlur={this.handleBlur}
          name={name}
          accept="image/*"
          type="file"
        />

        {helperText && <Message id="name-error-text" style={{ margin: '8px 20px 0 20px' }}>{helperText}</Message>}
      </div>
    )
  }
}

PictureUpload.propTypes = {
  url: string,
  pictures: array,
  name: string.isRequired,
  helperText: string,
  onChange: func,
  onBlur: func,
}
PictureUpload.defaultProps = {
  url: '/upload',
  pictures: [],
  helperText: '',
  onChange: () => {},
  onBlur: () => {},
}

export default PictureUpload
