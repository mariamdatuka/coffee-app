import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { Options } from '../../Types'

interface Props{
    setModal:(value: boolean) => void
    selectedOption:Options[],
    totalPrices:number
}

const Modal = ({setModal, selectedOption, totalPrices}:Props) => {
    
  return (
    <>
      <Overlay onClick={(modal)=>setModal(!modal)}>
        <ModalContainer>
           <h3>Order Summary</h3>
           <Summary>I drink my coffee using  <span>{selectedOption[0]?.selectedOption}</span>
            with a <span>{selectedOption[1]?.selectedOption}</span> type of bean.
           <span>{selectedOption[2]?.selectedOption} {selectedOption[3]?.questionId===4?`ground ala ${selectedOption[3].selectedOption}`:''}</span>, sent to me 
           <span>{selectedOption[4]?.questionId===5
           ?`${selectedOption[4].selectedOption}`
           : selectedOption[3]?.questionId===5
           ? `${selectedOption[3].selectedOption}`
           :''}</span>"</Summary>
           <p>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
         <PriceBox>
             <h2>${totalPrices}/mo</h2>
             <Button text='checkout'/>
         </PriceBox> 
        </ModalContainer>
      </Overlay>
    </>
  )
}

export default Modal

const ModalContainer = styled.div`
  position: fixed;
  width:400px;
  height:400px;
  padding:20px;
  border-radius:8px;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap:20px;
  z-index: 999;
  background-color:#fff;
  transform: translate(-50%, -50%);
  & p{
    font-size:14px;
    color:#333D4B;
    font-family:'Barlow', serif;
  }
  & h3{
    background-color: #333D4B;
    font-size:34px;

  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 998;
`;

const Summary=styled.div`
  font-size:18px;
  color:#83888F;
  & span{
    color:#0E8784;
  }
`
const PriceBox=styled.div`
  margin-top:30px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
`