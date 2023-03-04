import React from 'react'
import {Wrapper,CircleContainer,Circle,Line, GridContainer,GridItem} from './Styles'

const Steps = () => {
  return (
    <>
<Wrapper>
    <CircleContainer>
      <Circle></Circle>
      <Line></Line>
      <Circle></Circle>
      <Line></Line>
      <Circle></Circle>
    </CircleContainer>
   <GridContainer>
      <GridItem>
         <h1>01</h1>
         <h2>pick your <br/> coffee</h2>
         <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
      </GridItem>
      <GridItem>
         <h1>02</h1>
         <h2>Choose the <br/> frequency</h2>
         <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
      </GridItem>
      <GridItem>
         <h1>03</h1>
         <h2>Receive and <br/> enjoy!</h2>
         <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
      </GridItem>
   </GridContainer> 
</Wrapper>
    </>
  )
}

export default Steps