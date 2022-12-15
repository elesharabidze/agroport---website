import styled from "styled-components";

export const AboutCompanyPageWrapper = styled.div`
    width: 100%;
    height: fit-content;
    margin: 70px 0 50px 0;
    display: flex; 
    justify-content: center;
    align-items: center;
`
export const AboutCompanyPageContentContainer = styled.div`
    max-width: 1366px;
    width: 100%;
    height: fit-content;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const AboutCompanyPageHeader = styled.span`
    width: 100%;
    height: fit-content;
    text-align: center;
    font-family: 'GeorgianFont';
    text-transform: uppercase;
    font-weight: bold;
    font-size: 40px;
    color: hsl(152deg 100% 20%);
    line-height: 45px;
    letter-spacing: 2px;
    @media (max-width: 900px){
        font-size: 30px;
        line-height: 40px;
    }
    @media (max-width: 600px){
        font-size: 27px;
    }
`
export const AboutCompanyPageTextWrapper = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 20px;    
    @media (max-width: 1200px){
        flex-direction: column;
        padding: 0 30px;
    }
    @media (max-width: 600px){
        margin-top: 30px;
        padding: 0 20px;
        text-align: justify;
    }
    @media (max-width: 450px){
        padding: 0 10px;
    }
`
export const AboutCompanyPageText = styled.span`
    width: 100%;
    height: fit-content;
    font-family: 'Ninomtavruli';
    font-weight: bold;
    font-size: 20px;
    color: hsl(152deg 100% 20%);
    line-height: 45px;
    letter-spacing: 1.5px;
    @media (max-width: 1200px){
        font-size: 19px;
    }
    @media (max-width: 600px){
        font-size: 16px;   
        text-align: justify;    
    }
`
export const AboutCompanyPageImageContainer = styled.div`
    max-width: 1366px;
    height: fit-content;
    display: flex;
    margin-top: 80px;
    justify-content: flex-end;
    align-items: center;
`