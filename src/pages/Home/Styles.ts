import styled from "styled-components";
import bgimage from '../../assets/home/desktop/image-hero-coffeepress.jpg'

export const MainWrapper=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
export const Wrapper=styled.div`
   background-image: url(${bgimage});
   height:100vh;
   background-position:center;
   background-repeat:no-repeat;
   background-size: cover;
   margin-bottom:50px;
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
`
export const CoffeeBox=styled.div`
  
`
export const GridContainer=styled.div`
  display:grid;
  grid-template-columns:repeat(4, 1fr);
  place-items:center;
  column-gap:15px;
  margin-bottom:30px;
`
export const GridItem=styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 gap:20px;

 & img{
   width:200px;
 }

 & h3{
   padding-top:10px;
   color:#333D4B;
   font-size:24px;
   font-weight:bold;
 }

 & p{
   font-family:'Barlow',serif;
   font-size:16px;
   color:#333D4B;
   width:250px;
   text-align:center;
   line-height:1.5;
 }
`
export const WhyUs=styled.div`
  width:1100px;
  height:500px;
  background-color:#333D4B;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:150px 0;
  gap:30px;
  position:absolute;
  top:155%;
  z-index:1;

  & h4{
   padding-top:60px;
    font-size:38px;
    font-weight:900;
    color:#fff;
  }

  & p{
     width:530px;
     text-align:center;
     color:#83888F;
     font-family:'Barlow',serif;
     font-size:16px;
     line-height:1.5;
  }
`
export const GridContainer2=styled.div`
   display:grid;
   grid-template-columns:1fr 1fr 1fr;
   column-gap:20px;
   place-items:center;
   z-index:999;
   margin-top:300px;
   position:relative;
`
export const GridItem2=styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  align-items:center;
  justify-content:center;
  width:330px;
  height:350px;
  border-radius:8px;
  background-color:#0E8784;

  & h5{
   font-size:24px;
   font-weight:bold;
   padding:40px 0 20px 0;
   color:#fff;
  }

  & p{
   width:230px;
   text-align:center;
   font-family:'Barlow', serif;
   color:#FEFCF7;
   line-height:1.5;
   }
`
export const StepsCont=styled.div`
  margin-top:100px;
  align-self:flex-start;

  & h6{
    font-size:24px;
    color:#83888F;
    margin-bottom:50px;
  }
`