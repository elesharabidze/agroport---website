import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import * as Styled from './StyledBurgerMenu'
import { Drawer } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import DomainIcon from '@mui/icons-material/Domain'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
// import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import FacebookLogo from 'assets/images/icons/facebook.svg'
import LanguageDropdown from 'components/languuageDropdown/LanguageDropdown'

const BurgerMenu = () => {
    const { t } = useTranslation()

    const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

    const openDrawer = () => {
        setOpenBurgerMenu(true)
    }

    const toggleDrawer = (x) => (event) => {
        setOpenBurgerMenu(x)
      };

    return (
        <>
            <Styled.BurgerMenuIconContainer onClick={openDrawer} >
                <Styled.BurgerMenu></Styled.BurgerMenu>
                <Styled.BurgerMenu></Styled.BurgerMenu>
                <Styled.BurgerMenu></Styled.BurgerMenu>
            </Styled.BurgerMenuIconContainer>
            <Drawer anchor="right" open={openBurgerMenu} onClose={toggleDrawer(false)}>
                <Styled.Drawer>
                    <Styled.BurgerMenuContentContainer>

                        <Styled.BurgerMenuItem>                            
                            <Styled.BurgerMenuContentItem className='headerDropdownContentItem' to="/" onClick={() => setOpenBurgerMenu(false)}>
                                <HomeIcon/>&nbsp;{t('menu[0]')}
                            </Styled.BurgerMenuContentItem>
                        </Styled.BurgerMenuItem>

                        <Styled.BurgerMenuItem>                            
                            <Styled.BurgerMenuContentItem className='headerDropdownContentItem' to="/about_agroport" onClick={() => setOpenBurgerMenu(false)}>
                                <DomainIcon />&nbsp;{t('menu[1]')}
                            </Styled.BurgerMenuContentItem>
                        </Styled.BurgerMenuItem>

                        <Styled.BurgerMenuItem>                            
                            <Styled.BurgerMenuContentItem className='headerDropdownContentItem' to="/production_and_products" onClick={() => setOpenBurgerMenu(false)}>
                                <AutoAwesomeMotionIcon />&nbsp;{t('menu[2]')}
                            </Styled.BurgerMenuContentItem>
                        </Styled.BurgerMenuItem>

                        {/* <Styled.BurgerMenuItem>
                            <Styled.BurgerMenuContentItem disabled className='headerDropdownContentItem' to="#" onClick={() => setOpenBurgerMenu(false)}>
                                <LocalLibraryIcon />&nbsp;{t('menu[3]')}
                            </Styled.BurgerMenuContentItem>
                        </Styled.BurgerMenuItem> */}

                        <Styled.BurgerMenuItem>
                            <Styled.BurgerMenuContentItem className='headerDropdownContentItem' to="/contact" onClick={() => setOpenBurgerMenu(false)}>
                                <AlternateEmailIcon />&nbsp;{t('menu[4]')}
                            </Styled.BurgerMenuContentItem>
                        </Styled.BurgerMenuItem>

                    </Styled.BurgerMenuContentContainer>                    
                    <Styled.LanguageDropdownBurgerMenuWrapper>
                        <Styled.HeaderFacebookLogo src={FacebookLogo} alt='agroport' />   
                        <LanguageDropdown burgerMenu/>
                    </Styled.LanguageDropdownBurgerMenuWrapper>
                </Styled.Drawer>
            </Drawer>
        </>
    )
}

export default BurgerMenu