import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const FooterWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;
    padding-bottom: 20px;
    background-color: hsl(0deg 0% 95%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const FooterContent = styled.div`
    max-width: 1366px;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 30px;
    justify-content: space-evenly;
    padding: 50px 0 30px 0;
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
        margin: 0; 
    }
`
export const FooterContentSection = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 60px;
    @media (max-width: 900px){
        align-items: center;
        margin: 0;
        ${props => props.contactSection && `flex-direction: row;`}
        ${props => props.contactSection && `justify-content: center;`}
        ${props => props.contactSection && `align-items: center;`}
        ${props => props.contactSection && `margin-top: 40px;`}
    }
`
export const FooterContentHeader = styled.span`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 24px;
    color: hsl(152deg 100% 20%);
    font-family: "GeorgianFont";
    margin-bottom: 30px;
    letter-spacing: 2px;
    @media (max-width: 900px) {
        margin-top: 40px;
        margin-bottom: 15px;
    }
`
export const FooterSectionText = styled.span`
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : '17px'};
    color: hsl(152deg 100% 20%);
    ${props => props.bold && 'font-weight: bold;'}
    margin-top: ${props => props.mt ? `${props.mt}px` : '0'};
    padding: ${props => props.padding ? `${props.padding}` : '5px 0'};
    font-family: ${props => props.eng ? 'EnglishFontLight' : 'NinoMtavruli'};
    ${props => props.pointer && `cursor: pointer;`}
    ${props => !props.noUppercase && 'text-transform: uppercase;'}
    ${props => props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`}
    ${props => props.flex && 'display: flex;'}
    ${props => props.flex && 'justify-content: center;'}
    ${props => props.flex && 'align-items: center;'}
    &:hover{
        ${props => props.hover && `color: #008f4c;`}
    }
`
export const FooterSectionMenuItems = styled(Link)`
    text-decoration: none;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : '17px'};
    ${props => props.disabled ? 'color: #e0e0de;' : 'color: hsl(152deg 100% 20%);'}
    padding: 5px 0;
    font-family: 'NinoMtavruli';
    cursor: ${props => !props.disabled && 'pointer'};
    ${props => !props.noUppercase && 'text-transform: uppercase;'}
    ${props => props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`}
    &:hover{
        ${props => !props.disabled && `color: #008f4c;`}
    }
`
export const FooterContentContactButton = styled.button`
    background-color: hsl(152deg 100% 20%);
    border: 0;
    font-size: 17px;
    color: white;
    width: 120px;
    margin-top: 40px;
    height: 50px;
    font-family: 'GeorgianFont';
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #008f4c;
    }
    @media (max-width: 900px) {
        margin: 0;
    }
`
export const FooterFacebookLogo = styled.img`
    width: 32px;
    margin-top: 20px;
    cursor: pointer;
    @media (max-width: 900px) {
        margin: 0 0 0 20px;
    }
`
export const FooterInfoWrapper = styled.div`
    max-width: 1366px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 0 0;
    @media (max-width: 900px) {
        justify-content: center;
        flex-direction: column;
    }
`
export const FooterGeorgianFlag = styled.img`
    width: 30px;
    height: 20px;
    padding: 0 0 0 10px;
`