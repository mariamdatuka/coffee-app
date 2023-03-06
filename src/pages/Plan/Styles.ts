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

