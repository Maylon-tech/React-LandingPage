import styled from 'styled-components'


export const HeaderContainer = styled.header`
  color: blue;
  height: 100px;
  width: 100%;
  max-width: 1380px;
  min-width: 280px;
  background-color: #222;
  margin: 0 auto;
    border: 2px solid white;
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid orange;
  height: 100%;
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  width: 100%;
  border: 2px solid greenyellow;
  height: 100%;
`

export const Logo = styled.div`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`

export const ImgLogo = styled.img`
  
`

export const NavItems = styled.ul`
  display: flex;
  border: 2px solid red;
  padding: 1rem;
  gap:1.5rem;
`

export const Item = styled.li`
  color: #fff;
`

export const HeaderContai = styled.a`
  
`

export const ButtonRegister = styled.button`
  padding: .6rem;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`