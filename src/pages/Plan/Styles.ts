import styled from "styled-components";
import bg2 from '../../assets/plan/desktop/image-hero-blackcup.jpg';

export const Wrapper=styled.div`
   background-image: url(${bg2});
   height:70vh;
   background-position:center;
   background-repeat:no-repeat;
   background-size: cover;
   border-radius:10px;
   margin-bottom:100px;
`
export const Container=styled.div`
 display:flex;
 flex-direction:column;
 padding-left:70px;
 padding-top:100px;
 align-items:flex-start;
 gap:30px;

 & h1{
   color:#fff;
   font-size:68px;
 }

 & div{
   width:400px;
   height:100px;
   color:#FEFCF7;
   font-family:'Barlow',serif;
   line-height:1.5;
 }
`

export const GridContainer=styled.div`
     display:grid;
     grid-template-columns:repeat(3,1fr);
     place-items:center;
`
export const GridItem=styled.div`
     display:flex;
     align-items:center;
     flex-direction:column;
     justify-content:center;
     gap:20px;
     width:225px;
     height:250px;
     padding:10px;
`
export const Container2=styled.div`
    
    & button{
      width:700px;
      height:50px;
      border:none;
      font-size:38px;
      color:#83888F;
      font-family:inherit;
      cursor:pointer;
    }
`