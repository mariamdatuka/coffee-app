import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { Options } from '../../Types'

interface Props{
    setModal:(value: boolean) => void
    selectedOption:Options[]
}

const Modal = ({setModal, selectedOption}:Props) => {

    const calculatePrice=(option:string)=>{
        
    }
  return (
    <>
      <Overlay onClick={(modal)=>setModal(!modal)}>
        <ModalContainer>
           <h3>Order Summary</h3>
           <div>I drink my coffee using <span>{selectedOption[0]?.selectedOption}</span>
           with a <span>{selectedOption[1]?.selectedOption}</span> type of bean.
           <span>{selectedOption[2]?.selectedOption} {`ground ala ${selectedOption[3]?.selectedOption}`}</span>, sent to me {selectedOption[4]?.selectedOption}</div>
           <p>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
         <div>
             <h2>Price</h2>
             <Button text='checkout'/>
         </div> 
        </ModalContainer>
      </Overlay>
    </>
  )
}

export default Modal

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
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