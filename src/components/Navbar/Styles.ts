import styled from "styled-components";

export const Wrapper=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:30px 0;
`
export const FlexBox=styled.div`
  display:flex;
  gap:10px;
  align-items:center;
  justify-content:center;

  & h1{
    font-weight:900;
  }
`
export const LinkBox=styled.div`
 display:flex;
 gap:10px;

 & p{
    font-size:12px;
    font-family:'Barlow',serif;
    font-weight:bold;
    color:#83888F;
    cursor:pointer;
    transition: all 0.3s ease-in-out;

 }

 & p:hover{
    color:#000;
 }
`