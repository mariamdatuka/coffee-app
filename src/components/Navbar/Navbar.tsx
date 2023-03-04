import React from 'react'
import beans from '../../assets/about/beans.png'
import { Wrapper,FlexBox, LinkBox } from './Styles'

const Navbar = () => {
  return (
    <>
    <Wrapper>
      <FlexBox>
         <img src={beans} alt='beans'/>
         <h1>coffeeroasters</h1>
      </FlexBox>
      <LinkBox>
         <p>HOME</p>
         <p>ABOUT US</p>
         <p>CREATE YOUR PLAN</p>
      </LinkBox>
    </Wrapper> 
    </>
  )
}

export default Navbar