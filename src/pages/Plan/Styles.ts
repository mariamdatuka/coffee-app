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
     column-gap:10px;
`
export const GridItem=styled.div`
     display:flex;
     flex-direction:column;
     justify-content:center;
     gap:20px;
     width:200px;
     height:250px;
     padding:10px;
     background-color:#F4F1EB;
     border-radius:8px;
     cursor:pointer;

     & h3{
         color:#333D4B;
         font-size:24px;
     }

     & p{
      font-size:16px;
      font-family:'Barlow', serif;
      color:#333D4B;
      width:170px;
     }
`
export const Container2=styled.div`
     display:flex;
     flex-direction:column;
     margin-left:100px;
    & button{
      width:700px;
      height:50px;
      border:none;
      font-size:38px;
      color:#83888F;
      font-family:inherit;
      cursor:pointer;
      text-align:left;
    }
`

export const ListBox=styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
`

export const ListItem=styled.div`
 display:flex;
 gap:10px;
 width:255px;
 padding:10px;
 border-bottom:1px solid  #83888F;
 cursor:pointer;

 & p {
  color: #83888F;
  font-size:24px;
}

& span {
  color: #83888F;
  font-size:24px;
}
`

export const Summary=styled.div`
   width:670px;
   height:200px;
   padding:30px;
   border-radius:10px;
   margin-top:100px;
   margin-bottom:30px;
   background-color: #333D4B;

 & h4{
  font-family:'Barlow', serif;
  font-size:16px;
  color:#FFFFFF;
 }
 & p{
  margin-top:30px;
  font-size:24px;
  color:#fff;
 }
 & p span{
  color:#0E8784;
 }
`