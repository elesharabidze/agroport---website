import styled from "styled-components";

export const MailFormTextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const MailFormText = styled.span`
    max-width: 1366px;
    width: 100%;
    padding: 40px 0 0 50px;
    text-align: start;
    font-family: "GeorgianFont";
    font-size: 15px;
    color: hsl(152deg 100% 20%);
    @media (max-width: 1080px) {
        text-align: center;
        padding: 30px 0 0 0;
    }
` 
export const MailFormEmailInputText = styled.span`
    font-family: 'NinoMtavruli';
    color: #adadad;
    font-size: 13px; 
    margin-top: 20px;
    @media (max-width: 600px) {
        width: 70%;
    }
`