import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import * as Styled from './StyledAboutCompanyPage'
import sliderImage1 from 'assets/images/logo.png'
import sliderImage2 from 'assets/images/sliderImages/almond5.jpg'
import sliderImage3 from 'assets/images/sliderImages/almond4.jpg'
import sliderImage4 from 'assets/images/sliderImages/almond5.jpg'
import PhotoSlider from 'components/photoSlider/PhotoSlider'

const AboutCompanyPage = () => {
    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    const items = [
        {img: sliderImage1},
        {img: sliderImage2},
        {img: sliderImage3},
        {img: sliderImage4},
    ]

    return (
        <Styled.AboutCompanyPageWrapper>
            <Styled.AboutCompanyPageContentContainer>
                <Styled.AboutCompanyPageHeader>{t('menu[1]')}</Styled.AboutCompanyPageHeader>
                <Styled.AboutCompanyPageTextWrapper>
                    <Styled.AboutCompanyPageText>{t('aboutCompanyText')}</Styled.AboutCompanyPageText>
                    <Styled.AboutCompanyPageImageContainer>
                        <PhotoSlider images={items} />
                    </Styled.AboutCompanyPageImageContainer>
                </Styled.AboutCompanyPageTextWrapper>
            </Styled.AboutCompanyPageContentContainer>
        </Styled.AboutCompanyPageWrapper>
    )
}

export default AboutCompanyPage