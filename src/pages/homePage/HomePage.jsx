import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import * as Styled from './StyledHomePage'
import Logo from 'assets/images/logo.png'
import PhotoSlider from 'components/photoSlider/PhotoSlider'
import Slider1 from 'assets/images/sliderImages/almond3.jpg'
import Slider2 from 'assets/images/sliderImages/almond2.jpg'
import Slider3 from 'assets/images/sliderImages/almond4.jpg'
import Slider4 from 'assets/images/sliderImages/almond5.jpg'
import Slider5 from 'assets/images/sliderImages/almond6.jpg'
import Slider6 from 'assets/images/sliderImages/almond1.jpg'

const HomePage = () => {
    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    const items = [
        {img:Slider1},
        {img:Slider2}, 
        {img:Slider3}, 
        {img:Slider4},
        {img:Slider5},
        {img:Slider6},
    ]

    return (
        <>
            <PhotoSlider images={items} />

            <Styled.HomePageInfoWrapper>

                <Styled.HomePageAboutCompanySection>
                    <Styled.AboutCompanySectionLogoWrapper>
                        <Styled.AboutCompanySectionLogo src={Logo} />
                    </Styled.AboutCompanySectionLogoWrapper>
                    <Styled.AboutCompanySectionTextWrapper width='60%'>
                        <Styled.AboutCompanySectionText>{t('homePageAboutCompanyText')}</Styled.AboutCompanySectionText>
                        <Styled.BR />
                        <Styled.SeeMore to='/about_agroport'>{t('seeMore')}</Styled.SeeMore>
                    </Styled.AboutCompanySectionTextWrapper>
                </Styled.HomePageAboutCompanySection>

                <Styled.HomePageAboutProductionSection>

                    <Styled.AboutCompanySectionTextWrapper width='100%'>
                        <Styled.AboutCompanySectionText>{t('productionAndProductsTextRow[0][0]')}</Styled.AboutCompanySectionText>
                        <br />
                        <br />
                        <Styled.AboutCompanySectionText>{t('productionAndProductsTextRow[0][1]')}</Styled.AboutCompanySectionText>
                        <Styled.BR />
                        <Styled.SeeMore to='/production_and_products'>{t('seeMore')}</Styled.SeeMore>
                    </Styled.AboutCompanySectionTextWrapper>

                </Styled.HomePageAboutProductionSection>

            </Styled.HomePageInfoWrapper>
        </>
    )
}

export default HomePage