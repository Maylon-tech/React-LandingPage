import React from 'react'
import { 
    ButtonRegister,
    HeaderContainer, 
    ImgLogo, 
    Item, 
    Logo, 
    NavItems, 
    NavWrapper, 
    Navigation,
} from './index'

const Header = () => {
  return (
    <HeaderContainer>
        <Navigation>
            <NavWrapper>
                <Logo>
                    <ImgLogo atl="Logo"/>LOGO
                </Logo>

                <NavItems>
                    <Item>
                        Home
                    </Item>
                    <Item>
                        About
                    </Item>
                    <Item>
                        Produtos
                    </Item>
                    <Item>
                        News
                    </Item>
                    <Item>
                        Contact
                    </Item>
                </NavItems>

                <ButtonRegister>
                    Create Account
                </ButtonRegister>
            </NavWrapper>
        </Navigation>
    </HeaderContainer>
  )
}

export default Header