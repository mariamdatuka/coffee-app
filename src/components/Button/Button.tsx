import React from 'react'
import styled from 'styled-components'
import { BtnProps } from '../../Types'

const Button = ({text,onClick}:BtnProps) => {

  return (
    <>
     <MainButton onClick={onClick}>
       {text}
     </MainButton>
    </>
  )
}

export default Button

const MainButton=styled.button`
   width:200px;
   border:none;
   height:55px;
   border-radius:6px;
   cursor:pointer;
   background-color:#0E8784;
   color:#fff;
   font-weight:bold;
   font-family:'Fraunces', serif;
   font-size:16px;
   transition:all 0.3s ease-in-out;
 
   &:hover{
   background-color:#66D2CF;
  }
`