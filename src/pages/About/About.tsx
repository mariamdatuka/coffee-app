import React from 'react'
import { Wrapper,Container, InfoBox,Wrapper2, GridContainer,GridItem, Main} from './Styles'
import comm from '../../assets/about/desktop/image-commitment.jpg'
import quality from '../../assets/about/desktop/image-quality.jpg'
import uk from '../../assets/about/desktop/illustration-uk.svg'
import australia from '../../assets/about/desktop/illustration-australia.svg'
import canada from '../../assets/about/desktop/illustration-canada.svg'


const About = () => {
  return (
    <>
  <Main>
     <Wrapper>
        <Container>
          <h1>About Us</h1>
          <div>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</div>
        </Container>
      </Wrapper>
      <InfoBox>
         <img src={comm} alt='commitment'/>
         <div>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</div>
      </InfoBox>
     <Wrapper2>
         <img src={quality} alt='quality'/>
         <Container>
          <h3>Uncompromising quality</h3>
          <div>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</div>
        </Container>
     </Wrapper2> 
     <h4>Our Headquarters</h4>
     <GridContainer>
      <GridItem>
         <img src={uk} alt='uk'/>
         <h2>United Kingdom</h2>
         <p>68  Asfordby Rd <br/>
            Alcaston <br/>
            SY6 1YA <br/>
            +44 1241 918425</p>
      </GridItem>
      <GridItem>
         <img src={canada} alt='canada'/>
         <h2>Canada</h2>
         <p>1528  Eglinton Avenue <br/>
            Toronto <br/>
            Ontario M4P 1A6 <br/>
            +1 416 485 2997</p>
      </GridItem>
      <GridItem>
        <img src={australia} alt='aus'/>
         <h2>Australia</h2>
         <p> 
         36 Swanston Street <br/>
         Kewell <br/>
         Victoria <br/>
         +61 4 9928 3629
         </p>
      </GridItem>
   </GridContainer> 
   </Main>
    </>
  )
}

export default About