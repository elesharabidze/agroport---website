import React from 'react'

import * as Styled from './StyledSliderItem'

const SliderItem = ({ item }) => {
    return (
        <Styled.SliderItemWrapper>
            <Styled.SliderItemContainer>
                <Styled.SliderItemImage src={item.img} alt='ნუში'/>
            </Styled.SliderItemContainer>
        </Styled.SliderItemWrapper>
    )
}

export default SliderItem