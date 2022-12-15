import styled from "styled-components"

import { Link } from 'react-router-dom'

export const BurgerMenuIconContainer = styled.div`
    display: none;
    cursor: pointer;
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: space-between;
    } 
`
export const BurgerMenu = styled.div`
    width: 35px;
    height: 4px;
    background-color: hsl(152deg 100% 20%);
    margin: 4px 0;
    border-radius: 18px;
    @media (max-width: 900px){
        width: 32px;
        height: 3px;
        margin: 4px 0;
    }
`
export const Drawer = styled.div`
    width: 290px;
    height: 100%;
    background-color: #f5fffb;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`
export const BurgerMenuContentContainer = styled.div`
    margin: 30px 0 0 0;
    color: hsl(152deg 100% 20%);
`
export const BurgerMenuItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BurgerMenuContentItem = styled(Link)`
    width: 100%;
    padding: 12px 0 12px 16px ;
    text-decoration: none;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-family: "GeorgianFont";
    font-size: 13px;
    ${props => props.disabled ? 'color: #e0e0de;' : 'color: hsl(152deg 100% 20%);'}
    &:hover{
        color: #008f4c;
    }
`
export const SocialIconWrapper = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 50px;
    display: flex; 
    justify-content: center;
    align-items: center;
`
export const LanguageDropdownBurgerMenuWrapper = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const HeaderFacebookLogo = styled.img`
    width: 28px;     
    margin-left: 20px;
    cursor: pointer;
`