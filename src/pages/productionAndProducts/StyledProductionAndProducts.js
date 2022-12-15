import styled from "styled-components"

export const ProductionAndProductsWrapper = styled.div`
    width: 100%;
    height: fit-content;
    margin: 70px 0 50px 0;
    display: flex; 
    justify-content: center;
    align-items: center;
    @media (max-width: 500px){
        margin: 40px 0 50px 0;
    }
    @media (max-width: 400px){
        margin: 20px 0 0 0;
    }
` 
export const ProductionAndProductsContainer = styled.div`
    max-width: 1366px;
    width: 100%;
    height: fit-content;
    margin: 20px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ProductionAndProductsHeader = styled.span`
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
    margin-bottom: 20px;
    @media (max-width: 1200px){
        margin: 0;
    }
    @media (max-width: 900px){
        font-size: 30px;
        line-height: 40px;
    }
    @media (max-width: 600px){
        font-size: 27px;
    }
`  
export const ProductionAndProductsContent = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
` 
export const ProductionAndProductsContentRow = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;    
    justify-content: space-evenly;
    align-items: center;
    ${props => props.mt && 'margin-top: 60px;'}
    ${props => props.reverse && 'flex-direction: row-reverse;'}
    @media (max-width: 1200px){
        flex-direction: column;
    }
` 
export const ProductionAndProductsLeftColumn = styled.div`
    width: ${props => props.noPhoto ? '100%' : '60%'};
    ${props => props.noPhoto && 'padding: 0 20px;'};
    height: fit-content;
    @media (max-width: 1200px) {
        width: 100%;
        padding: 0;
    }
` 
export const ProductionAndProductsText = styled.div`
    width: 100%;
    height: fit-content;
    font-family: 'NinoMtavruli';
    font-weight: bold;
    color: hsl(152deg 100% 20%);
    line-height: 45px;
    font-size: 20px;
    letter-spacing: 1.5px;
    ${props => props.mt && 'margin-top: 20px;'}
    @media (max-width: 1200px) {
        text-align: center;
        padding: 0 30px;
        font-size: 19px;
    }
    @media (max-width: 600px){
        padding: 0 20px;
        font-size: 16px;
        text-align: justify; 
    }
` 
export const ProductionAndProductsRightColumn = styled.div`
    width: 30%;
    display: ${props => props.noPhoto ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px) {
        width: 50%;
        margin: 50px 0 0 0;
    }
` 
export const ProductionAndProductsRightColumnImage = styled.img`
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 3px;
` 