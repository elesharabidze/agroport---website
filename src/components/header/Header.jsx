import React from 'react'
import { useTranslation } from 'react-i18next'

import * as Styled from './StyledHeader' 
import Logo from 'assets/images//logo.png'
import FacebookLogo from 'assets/images/icons/facebook.svg'
import BurgerMenu from './burgerMenu/BurgerMenu'
import HomeIcon from '@mui/icons-material/Home'
import DomainIcon from '@mui/icons-material/Domain'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
// import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import LanguageDropdown from 'components/languuageDropdown/LanguageDropdown'

const Header = () => {
  const { t } = useTranslation()

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderContainer>
        <Styled.LogoWrapper to='/'> 
          <Styled.Logo src={Logo} alt='agroport'/> 
        </Styled.LogoWrapper>        
        <Styled.HeaderList>
          <Styled.HeaderListItem><Styled.HeaderLink to='/'><HomeIcon />&nbsp;{t('menu[0]')}</Styled.HeaderLink></Styled.HeaderListItem>
          <Styled.HeaderListItem><Styled.HeaderLink to='/about_agroport'><DomainIcon />&nbsp;{t('menu[1]')}</Styled.HeaderLink></Styled.HeaderListItem>
          <Styled.HeaderListItem><Styled.HeaderLink to='/production_and_products'><AutoAwesomeMotionIcon />&nbsp;{t('menu[2]')}</Styled.HeaderLink></Styled.HeaderListItem>          
          {/* <Styled.HeaderListItem disabled><Styled.HeaderLink disabled to='#'><LocalLibraryIcon />&nbsp;{t('menu[3]')}</Styled.HeaderLink></Styled.HeaderListItem> */}
          <Styled.HeaderListItem><Styled.HeaderLink to='/contact'><AlternateEmailIcon />&nbsp;{t('menu[4]')}</Styled.HeaderLink></Styled.HeaderListItem>
        </Styled.HeaderList>
        <Styled.HeaderBurgerMenuWrapper>
          <Styled.LanguageDropdownHeaderWrapper>
            <LanguageDropdown />
          </Styled.LanguageDropdownHeaderWrapper>
          <BurgerMenu />
          <Styled.HeaderFacebookLogo src={FacebookLogo} alt='agroport' />          
        </Styled.HeaderBurgerMenuWrapper>        
      </Styled.HeaderContainer>
    </Styled.HeaderWrapper>
  )
}

export default Header