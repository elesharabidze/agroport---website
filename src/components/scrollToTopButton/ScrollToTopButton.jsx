import React, { useState } from 'react'

import * as Styled from './StyledScrollToTopButton'
import goUpIcon from '../../assets/images/icons/goUp.svg'

const ScrollToTopButton = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
    }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    };

    window.addEventListener("scroll", checkScrollTop)

    return (
        <Styled.ScrollTopWrapper style={{ height: 60, display: showScroll ? "flex" : "none" }}>
            <Styled.ScrollTopIcon className='scrollToTopIcon' src={goUpIcon} onClick={scrollTop}/>
        </Styled.ScrollTopWrapper>
    )
}

export default ScrollToTopButton