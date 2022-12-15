import React from 'react'
import Carousel from 'react-material-ui-carousel'

import * as Styled from './StyledPhotoSlider'
import SliderItem from './sliderItem/SliderItem'

const PhotoSlider = ({ images }) => {
    return (
        <Styled.PhotoSlider>
            <Carousel>
                {images.map((item, i) => <SliderItem key={i} item={item} />)}
            </Carousel>
        </Styled.PhotoSlider>
    )
}

export default PhotoSlider