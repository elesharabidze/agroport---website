import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import * as Styled from './StyledFooter'
import FacebookLogo from 'assets/images/icons/facebook.svg'
import GeorgianFlag from 'assets/images/flags/georgia.png'


const Footer = () => {
    const { t } = useTranslation()

    return (
        <Styled.FooterWrapper>
            <Styled.FooterContent>
                <Styled.FooterContentSection>
                    <Styled.FooterContentHeader>{t('location')}</Styled.FooterContentHeader>
                    <Styled.FooterSectionText bold>{t('llcAgroport')}</Styled.FooterSectionText>
                    <Styled.FooterSectionText>{t('georgia')},</Styled.FooterSectionText>
                    <Styled.FooterSectionText>{t('qvaxvreli')} #89848</Styled.FooterSectionText>                    
                    <Styled.FooterSectionText mt='40' noUppercase>Tel: +995 595 40 00 79</Styled.FooterSectionText>
                    <Styled.FooterSectionMenuItems to='/contact' noUppercase >E-Mail: info@agroport.ge</Styled.FooterSectionMenuItems>
                </Styled.FooterContentSection>
                <Styled.FooterContentSection>
                    <Styled.FooterContentHeader>{t('webMap')}</Styled.FooterContentHeader>
                    <Styled.FooterSectionMenuItems to='/' letterSpacing='2'>{t('menu[0]')}</Styled.FooterSectionMenuItems>
                    <Styled.FooterSectionMenuItems to='/about_agroport' letterSpacing='2'>{t('menu[1]')}</Styled.FooterSectionMenuItems>
                    <Styled.FooterSectionMenuItems to='/production_and_products' letterSpacing='2'>{t('menu[2]')}</Styled.FooterSectionMenuItems>
                    <Styled.FooterSectionMenuItems to='#' letterSpacing='2' disabled>{t('menu[3]')}</Styled.FooterSectionMenuItems>
                </Styled.FooterContentSection>
                <Styled.FooterContentSection contactSection>
                    <Link to='/contact'><Styled.FooterContentContactButton>{t('menu[4]')}</Styled.FooterContentContactButton></Link>
                    <Styled.FooterFacebookLogo src={FacebookLogo} alt='agroport' />
                </Styled.FooterContentSection>
            </Styled.FooterContent>
            <Styled.FooterInfoWrapper>
                <Styled.FooterSectionText letterSpacing='3' uppercase eng bold fontSize='13'>© Agroport 2020</Styled.FooterSectionText>
                <Styled.FooterSectionText letterSpacing='3' uppercase eng bold fontSize='13' flex>&nbsp;&nbsp;Georgian Company <Styled.FooterGeorgianFlag src={GeorgianFlag} /></Styled.FooterSectionText>
            </Styled.FooterInfoWrapper>
        </Styled.FooterWrapper>
    )
}

export default Footer