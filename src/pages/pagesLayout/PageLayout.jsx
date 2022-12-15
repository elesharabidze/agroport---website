import React, { useEffect } from 'react'
import { Switch, Route } from "react-router-dom"
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'
import ScrollToTopButton from 'components/scrollToTopButton/ScrollToTopButton'
import HomePage from 'pages/homePage/HomePage'
import ContactPage from 'pages/contactPage/ContactPage.jsx'
import AboutCompanyPage from 'pages/aboutCompanyPage/AboutCompanyPage'
import ProductionAndProducts from 'pages/productionAndProducts/ProductionAndProducts'

const PageLayout = () => {
    return (
        <>
            <Header />
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route exact path='/contact'>
                        <ContactPage />
                    </Route>    
                    <Route exact path='/about_agroport'>
                        <AboutCompanyPage />
                    </Route>                
                    <Route exact path='/production_and_products'>
                        <ProductionAndProducts />
                    </Route>
                </Switch> 
            <Footer />
            <ScrollToTopButton />
        </>
    )
}

export default PageLayout