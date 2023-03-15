import React from 'react'
import beans from '../../assets/about/beans.png'
import { Wrapper,FlexBox, LinkBox, StyledLink } from './Styles'


const Navbar = () => {
  return (
    <>
    <Wrapper>
      <FlexBox>
         <img src={beans} alt='beans'/>
         <h1>coffeeroasters</h1>
      </FlexBox>
      <LinkBox>
         <StyledLink to='/'>HOME</StyledLink>
         <StyledLink to='/about'>ABOUT US</StyledLink>
         <StyledLink to='/createplan'>CREATE YOUR PLAN</StyledLink>
      </LinkBox>
    </Wrapper> 
    </>
  )
}

export default Navbar