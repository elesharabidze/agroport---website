import styled from "styled-components"

import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 30px 0;
    @media (max-width: 1200px) {
        height: fit-content;
        margin: 0 0 10px 0;
    } 
`
export const HeaderContainer = styled.nav`
    max-width: 1366px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    @media (max-width: 1200px){
        margin: 0
    }
`
export const LogoWrapper = styled(Link)`
    max-width: 270px;
    @media (max-width: 1400px) {
        max-width: 240px;
    }
    @media (max-width: 500px) {
        max-width: 170px;
    }
    @media (max-width: 350px) {
        maxwidth: 150px;
    }
`
export const Logo = styled.img`
    width: 100%;
`
export const HeaderList = styled.ul`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px 0 0 0;
    padding: 0 0 0 30px;
    @media (max-width: 1200px) {
        display: none;
    }   
`
export const HeaderListItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: max-content;
    list-style: none;
    cursor: pointer;
    color: hsl(152deg 100% 20%);
    margin: 0 8px;
    padding: 0 3px;
    cursor:pointer;
    position:relative;
    background:white;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition:all 1s;
    &:after,&:before{
        content:" ";
        width: 3px;
        height: 3px;
        position: absolute;
        border: 0px solid #fff;
        transition:all 1s;
        }
    &:after{
        top:-1px;
        left:-1px;
        ${props => props.disabled ? 'border-top:2px solid #e0e0de;' : 'border-top:2px solid hsl(152deg 100% 20%);'}
        ${props => props.disabled ? 'border-left:2px solid #e0e0de;' : 'border-left:2px solid hsl(152deg 100% 20%);'}
    }
    &:before{
        bottom:-1px;
        right:-1px;
        ${props => props.disabled ? 'border-bottom:2px solid #e0e0de;' : 'border-bottom:2px solid hsl(152deg 100% 20%);'}
        ${props => props.disabled ? 'border-right:2px solid #e0e0de;' : 'border-right:2px solid hsl(152deg 100% 20%);'}
    }
    &:hover{
        border-top-right-radius:0px;
        border-bottom-left-radius:0px;
        &:before,&:after{
            ${props => !props.disabled && 'width: 100%;'}
            ${props => !props.disabled && 'height: 100%;'}
        }
    }
`
export const HeaderLink = styled(Link)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    ${props => props.disabled ? 'color: #e0e0de;' : 'color: hsl(152deg 100% 20%);'}
    padding: 5px;
    font-family: "GeorgianFont";
    letter-spacing: 2px;
    font-size: 12px;
    font-weight: bold;
    transition: .5s;
    z-index: 1;
`
export const HeaderBurgerMenuWrapper = styled.div`
    margin: 20px 0 0 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px) {
        margin: 10px 30px 0 0;
    }
`
export const HeaderFacebookLogo = styled.img`
    width: 28px;  
    margin: 0  0 0 20px;
    cursor: pointer;
    @media (max-width: 1200px){
        display: none;
    }
`
export const LanguageDropdownHeaderWrapper = styled.div`
    @media (max-width: 1200px){
        display: none;
    }
`