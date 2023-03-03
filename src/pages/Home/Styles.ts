import styled from "styled-components";
import bgimage from '../../assets/home/desktop/image-hero-coffeepress.jpg'

export const Wrapper=styled.div`
   background-image: url(${bgimage});
   height:100vh;
   background-position:center;
   background-repeat:no-repeat;
   background-size: cover;
   margin-bottom:20px;
   border-radius:10px;
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
   height:80px;
   color:#FEFCF7;
   font-family:'Barlow',serif;
   line-height:1.5;
 }

 & button{
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
 }

 & button:hover{
   background-color:#66D2CF;
 }
`