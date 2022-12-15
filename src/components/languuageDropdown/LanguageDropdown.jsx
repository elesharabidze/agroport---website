import React, { useState } from 'react'
import i18n from 'i18n/i18n'

import * as Styled from './StyledLanguageDropdown'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import GeorgianFlag from 'assets/images/flags/georgia.png'
import EnglishFlag from 'assets/images/flags/unitedStates.png'
// import RussianFlag from 'assets/images/flags/russia.png'

const countries = [
      { code: 'geo', name: 'ქართული', label: 'Georgian', disabled: false },
      { code: 'eng', name: 'English', label: 'English', disabled: false },
    //   { code: 'rus', name: 'РУССКИЙ', label: 'Russian', disabled: false },
    //   { code: 'deu', name: 'Deutsch', label: 'Germany', suggested: false },
    ];

const LanguageDropdown = ({ burgerMenu }) =>  {
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('currentLanguage') ? localStorage.getItem('currentLanguage') : 'English')
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleSuggestions = () => {
        setShowSuggestions(!showSuggestions)
    }

    const handleLanguageChange = (lng, code) => {
        localStorage.setItem('i18nextLng', code)
        localStorage.setItem('currentLanguage', lng)
        i18n.changeLanguage(code)
        setCurrentLanguage(lng)
        setShowSuggestions(false)
    } 

    return (
        <Styled.LanguageAutoCompleteWrapper burgerMenu={burgerMenu}>
            <Styled.LanguageAutocompleteContainer onClick={handleSuggestions}>
                <Styled.CurrentLanguageFlag src={currentLanguage === 'Georgian' ? GeorgianFlag : EnglishFlag} />                
                {   
                    burgerMenu 
                        ? 
                            showSuggestions ? <ArrowDropDownIcon color='hsl(152deg 100% 20%)' /> : <ArrowDropUpIcon color='hsl(152deg 100% 20%)' /> 
                        : 
                            showSuggestions ? <ArrowDropUpIcon color='hsl(152deg 100% 20%)' /> : <ArrowDropDownIcon color='hsl(152deg 100% 20%)' /> 
                }
            </Styled.LanguageAutocompleteContainer>
            <Styled.LanguageAutoCompleteSuggestionsWrapper showSuggestions={showSuggestions} burgerMenu={burgerMenu}>
                {
                    countries.map( item =>
                        <>
                            {   currentLanguage !== item.label &&
                                <Styled.LanguageDropdownItem key={item.code} onClick={() => {!item.disabled && handleLanguageChange(item.label, item.code)}}>
                                    
                                    <Styled.LanguageDropdownItemFlag 
                                        disabled={item.disabled} 
                                        src={item.label === 'Georgian' ? GeorgianFlag : EnglishFlag} 
                                    />

                                    <Styled.LanguageDropdownItemText 
                                        disabled={item.disabled}
                                    >
                                        {item.name}
                                    </Styled.LanguageDropdownItemText>

                                </Styled.LanguageDropdownItem>
                            } 
                        </>
                    )
                }                
            </Styled.LanguageAutoCompleteSuggestionsWrapper>
        </Styled.LanguageAutoCompleteWrapper>
    )
}

export default LanguageDropdown