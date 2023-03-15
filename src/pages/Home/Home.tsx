import React from 'react'
import {Wrapper,Container, CoffeeBox, GridContainer,GridItem, WhyUs, GridContainer2, GridItem2, MainWrapper,StepsCont} from './Styles'
import collec from '../../assets/home/collpng.png'
import gran from '../../assets/home/desktop/image-gran-espresso.png'
import planalto from '../../assets/home/desktop/image-planalto.png'
import piccollo from '../../assets/home/desktop/image-piccollo.png'
import danche from '../../assets/home/desktop/image-danche.png'
import beans from '../../assets/home/desktop/icon-coffee-bean.svg';
import gift from '../../assets/home/desktop/icon-gift.svg';
import truck from '../../assets/home/desktop/icon-truck.svg';
import Steps from '../../components/Steps/Steps'
import Button from '../../components/Button/Button'


const collectionData=[
  {
    photo:gran,
    title:'Gran Espresso',
    descr:'Light and flavorful blend with cocoa and black pepper for an intense experience.'
  },
  {
    photo:planalto,
    title:'Planalto',
    descr:'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.'
  },
  {
    photo:piccollo,
    title:'Piccollo',
    descr:'Mild and smooth blend featuring notes of toasted almond and dried cherry.'
  },
  {
    photo:danche,
    title:'Danche',
    descr:'Ethiopian hand-harvested blend densely packed with vibrant fruit notes.'
  },
]

export const Home = () => {

  const handleClick=(e:any)=>{
    console.log(e.target.value);
  }

  return (
    <>
      <Wrapper>
        <Container>
          <h1>Great coffee <br/>made simple.</h1>
          <div>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</div>
          <Button text='create your plan' onClick={handleClick}/>
        </Container>
      </Wrapper>
  <MainWrapper>  
    <div className='collection-section'> 
       <CoffeeBox>
        <img src={collec} alt='collection'/>
       </CoffeeBox>
       <GridContainer>
       {
        collectionData?.map((item,index)=>(
          <GridItem key={index}>
             <img src={item.photo} alt='collection'/>
             <h3>{item.title}</h3>
             <p>{item.descr}</p>
          </GridItem>
        ))
       }  
       </GridContainer>
     </div>
    <WhyUs>
        <h4>Why choose us?</h4>
        <p>A large part of our role is choosing which particular     coffees will be   featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
    </WhyUs>
    <GridContainer2>
       <GridItem2>
           <img src={beans} alt='beans'/>
           <h5>Best Quality</h5>
           <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
       </GridItem2>
       <GridItem2>
           <img src={gift} alt='gift'/>
           <h5>Exclusive Benefits</h5>
           <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
       </GridItem2>
       <GridItem2>
           <img src={truck} alt='truck'/>
           <h5>Free Shipping</h5>
           <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
       </GridItem2>
    </GridContainer2>
    <StepsCont> 
      <h6>How it works</h6>
      <Steps/>
      <Button text='create your plan' onClick={handleClick}/>
    </StepsCont> 
  </MainWrapper> 
    </> 
  )
}


