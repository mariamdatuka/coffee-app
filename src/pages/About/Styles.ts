import styled from "styled-components";
import bgimage from '../../assets/about/desktop/image-hero-whitecup.jpg'
import bg2 from '../../assets/about/desktop/bg-quality.png';

export const Wrapper=styled.div`
   background-image: url(${bgimage});
   height:70vh;
   background-position:center;
   background-repeat:no-repeat;
   background-size: cover;
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
   height:100px;
   color:#FEFCF7;
   font-family:'Barlow',serif;
   line-height:1.5;
 }
`
export const InfoBox=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:50px;
  margin:150px 0;

  & div{
    width:450px;
    height:260px;
    color:#333D4B;
    font-family:'Barlow',serif;
    line-height:1.5;
  }

  & img{
    border-radius:5px;
    width:400px;
  } 
`
export const Wrapper2=styled.div`
   background-image: url(${bg2});
   height:60vh;
   background-position:center;
   background-repeat:no-repeat;
   background-size: cover;
   margin:100px 0;
   border-radius:10px;
   position:relative;

   & img{
    position:absolute;
    width:300px;
    right:5%;
    bottom:35%;
    border-radius:5px;
   }

   & h3{
    font-size:40px;
    color:#FEFCF7;
   }
 `
export const GridContainer=styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
column-gap:10px;
margin-bottom:100px;
place-items:center;
`
export const GridItem=styled.div`
display:flex;
flex-direction:column;
gap:40px;

& img{
  width:40px;
}

& h2{
  color: #333D4B;
  font-size:32px;
}

& p{
  font-size:16px;
  font-family:'Barlow', serif;
  color: #333D4B;
  line-height:1.5;
}
`
export const Main=styled.div`
 display:flex;
 flex-direction:column;

 & h4{
  font-size:24px;
  color:#83888F;
  align-self:flex-start;
  padding-left:50px;
  padding-bottom:50px;
 }
`