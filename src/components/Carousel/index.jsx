/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Slider from 'react-slick'
import { array } from 'prop-types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Image } from 'semantic-ui-react'

const styles = {
  root: {},
  picture: {
    width: '100%',
    borderRadius: '3px',
  },
}

class Carousel extends React.Component {
  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  render() {
    const { pictures } = this.props
    const pathBack = 'http://localhost:3333'

    return (
      <div style={styles.root}>
        <Slider {...this.settings}>
          {pictures.map(picture_url =>
            (!picture_url.indexOf('/uploads') ?
              <Image key={picture_url} src={`${pathBack}${picture_url}`} style={styles.picture} />
              :
              <Image key={picture_url} src={picture_url} style={styles.picture} />))
          }
        </Slider>

      </div>
    )
  }
}

Carousel.propTypes = {
  pictures: array.isRequired,
}

export default Carousel
