import React from 'react'
import beans from '../../assets/about/beans.png'
import { Wrapper,FlexBox, LinkBox,SocialBox, StyledLink } from './Styles'
import fb from '../../assets/shared/desktop/icon-facebook.svg'
import insta from '../../assets/shared/desktop/icon-instagram.svg'
import twit from '../../assets/shared/desktop/icon-twitter.svg'

const Footer = () => {
  return (
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
      <SocialBox>
         <img src={fb} alt='fb'/>
         <img src={insta} alt='insta'/>
         <img src={twit} alt='twitter'/>
      </SocialBox>
    </Wrapper>
  )
}

export default Footer