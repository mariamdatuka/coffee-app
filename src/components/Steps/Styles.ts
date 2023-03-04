import styled from "styled-components";

export const Wrapper=styled.div`
  display:flex;
  flex-direction:column;
  gap:60px;
`
export const CircleContainer=styled.div`
  display:flex;
  align-items:center;
`
export const Circle=styled.div`
  width:30px;
  height:30px;
  border-radius:50%;
  border:2px solid #0E8784;  
`
export const Line=styled.div`
  width: 350px;
  height: 1px;
  background-color: #FDD6BA;
`
export const GridContainer=styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  column-gap:80px;
  margin-bottom:100px;
`
export const GridItem=styled.div`
  display:flex;
  flex-direction:column;
  gap:40px;

  & h1{
    font-size:68px;
    color:#FDD6BA;
  }

  & h2{
    color: #333D4B;
    font-size:32px;
  }

  & p{
    width:280px;
    font-size:16px;
    font-family:'Barlow', serif;
    color: #333D4B;
    line-height:1.5;
}
`