import styled from "styled-components"

export const LanguageAutoCompleteWrapper = styled.div`
    width: 110px;
    height: fit-content;
    ${props => props.burgerMenu && 'margin-right: 15px;' }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const LanguageAutocompleteContainer = styled.div`
    width: 50px;
    height: fit-content;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
`
export const CurrentLanguageFlag = styled.img`
    width: 24px;
    height: 24px;
`
export const LanguageAutoCompleteSuggestionsWrapper = styled.div`
    width: 100%;
    height: fit-content;
    padding: 5px 10px;
    z-index: 1;
    position: absolute;
    ${props => props.burgerMenu ? 'top: -50px;' : 'top: 25px;'}
    ${props => !props.burgerMenu && 'right: 0;'}
    ${props => !props.burgerMenu && 'left: 0;'}    
    background-color: 'black';
    flex-direction: column;
    ${props => props.showSuggestions ? 'display: flex;' : 'display: none;'}
`
export const LanguageDropdownItem = styled.div`
    padding: 5px 2px; 
    display: flex;
    cursor: pointer;
    align-items: center;
    color: black;
    &:hover{
        border-radius: 16px;
        background-color: #f7f6f2;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`
export const LanguageDropdownItemFlag = styled.img`
    width: 30px;
    height: 20px;
    padding: 0 5px;
    ${props => props.disabled && 'opacity: 0.5;'}
`
export const LanguageDropdownItemText = styled.span`
    margin-left: 10px;
    font-size: 12px;
    ${props => props.disabled ? 'color: #edeae4;' : 'color: hsl(152deg 100% 20%);'}
`