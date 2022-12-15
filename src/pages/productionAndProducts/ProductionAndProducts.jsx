import React from 'react'
import { useTranslation } from 'react-i18next'

import * as Styled from './StyledProductionAndProducts'
import column1 from 'assets/images/sliderImages/almond4.jpg'
import column2 from 'assets/images/sliderImages/almond2.jpg'
import column3 from 'assets/images/sliderImages/almond1.jpg'

const ProductionAndProducts = () => {
    const { t } = useTranslation()

    return(
        <Styled.ProductionAndProductsWrapper>
            <Styled.ProductionAndProductsContainer>
                <Styled.ProductionAndProductsHeader>{t('menu[2]')}</Styled.ProductionAndProductsHeader>
                <Styled.ProductionAndProductsContent>

                    <Styled.ProductionAndProductsContentRow>
                        <Styled.ProductionAndProductsLeftColumn>
                            <Styled.ProductionAndProductsText bold>{t('productionAndProductsTextRow[0][0]')}</Styled.ProductionAndProductsText>
                            <Styled.ProductionAndProductsText mt>{t('productionAndProductsTextRow[0][1]')}</Styled.ProductionAndProductsText>
                        </Styled.ProductionAndProductsLeftColumn>
                        <Styled.ProductionAndProductsRightColumn>
                            <Styled.ProductionAndProductsRightColumnImage src={column1}/>
                        </Styled.ProductionAndProductsRightColumn>
                    </Styled.ProductionAndProductsContentRow>

                    <Styled.ProductionAndProductsContentRow mt>
                        <Styled.ProductionAndProductsLeftColumn noPhoto>
                            <Styled.ProductionAndProductsText>{t('productionAndProductsTextRow[1]')}</Styled.ProductionAndProductsText>
                        </Styled.ProductionAndProductsLeftColumn>
                        <Styled.ProductionAndProductsRightColumn noPhoto>
                            <Styled.ProductionAndProductsRightColumnImage src={column2}/>
                        </Styled.ProductionAndProductsRightColumn>
                    </Styled.ProductionAndProductsContentRow>   

                    <Styled.ProductionAndProductsContentRow mt reverse>
                        <Styled.ProductionAndProductsLeftColumn>
                            <Styled.ProductionAndProductsText>{t('productionAndProductsTextRow[2][0]')}</Styled.ProductionAndProductsText>
                            <Styled.ProductionAndProductsText mt>{t('productionAndProductsTextRow[2][1]')}</Styled.ProductionAndProductsText>
                        </Styled.ProductionAndProductsLeftColumn>
                        <Styled.ProductionAndProductsRightColumn>
                            <Styled.ProductionAndProductsRightColumnImage src={column3}/>
                        </Styled.ProductionAndProductsRightColumn>
                    </Styled.ProductionAndProductsContentRow>                                         

                </Styled.ProductionAndProductsContent>                
            </Styled.ProductionAndProductsContainer>
        </Styled.ProductionAndProductsWrapper>
    )
}

export default ProductionAndProducts