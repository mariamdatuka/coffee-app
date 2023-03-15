import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  padding:30px;
  background-color:#2C343E;
  margin:150px 0 50px 0;
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
export const SocialBox=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;

  & img{
    width:100%;
    cursor:pointer;
  }
`
export const StyledLink=styled(Link)`
    text-decoration:none;
    font-size:12px;
    font-family:'Barlow',serif;
    font-weight:bold;
    color:#83888F;
    cursor:pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
    color:#000;
 }
`