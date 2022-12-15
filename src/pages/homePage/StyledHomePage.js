import styled from "styled-components"

import { Link } from "react-router-dom"

export const HomePageInfoWrapper = styled.div`
    width: 100%;
    height: fit-content;
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 1200px){
        margin: 50px 0;
    }
    @media (max-width: 900px){
        margin: 30px 0;
    }
`
export const HomePageAboutCompanySection = styled.div`
    max-width: 1366px;
    height: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: center;    
    @media (max-width: 1200px){
        flex-direction: column;
    }
`
export const AboutCompanySectionLogoWrapper = styled.div`
    width: 30%;
    height: fit-content;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 1200px){
        width: 50%;
    }
`
export const AboutCompanySectionLogo = styled.img`
    width: 100%;
`
export const AboutCompanySectionTextWrapper = styled.div`
    width: ${props => `${props.width}`};
    padding: ${props => props.width === '100%' ? '0 20px' : '0'};
    height: fit-content;
    /* ${props => props.width === '100%' && 'text-align: center;'} */
    @media (max-width: 1200px){
        width: 100%;
        padding: 0 30px;
        text-align: center;
    }
    @media (max-width: 600px){
        padding: 0 20px;
        text-align: justify; 
    }
    @media (max-width: 450px){
        padding: 0 10px;
    }
`
export const AboutCompanySectionText = styled.span`
    width: 100%;
    font-family: 'Ninomtavruli';
    font-weight: bold;
    font-size: 20px;
    color: hsl(152deg 100% 20%);
    line-height: 45px;
    letter-spacing: 1.5px;
    padding: ${props => props.pt ? `${props.pt}` : '0'}; 
    @media (max-width: 1200px){
        font-size: 19px;
    }
    @media (max-width: 600px){
        font-size: 16px;
    }
`
export const BR = styled.br`
    display: none;
    @media (max-width: 1200px){
        display: block;
    }
`
export const SeeMore = styled(Link)`
    font-family: 'Ninomtavruli';
    font-size: 16px;
    text-decoration: none;
    color: hsl(152deg 100% 20%);
    line-height: 40px;
    letter-spacing: 1.5px;
    padding: 0 0 0 20px;
    cursor: pointer;
    &:hover{
        color: #008f4c;
    }
    @media (max-width: 1200px) {
        padding: 0;
    }
`
export const HomePageAboutProductionSection = styled.div`
    max-width: 1366px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;    
    margin: 50px 0;
`