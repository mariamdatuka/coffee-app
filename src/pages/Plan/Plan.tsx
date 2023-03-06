import React from 'react'
import Steps from '../../components/Steps/Steps';
import {Container,Wrapper} from './Styles';

const questions=[
    {
        id:1,
        question:'How do you drink your coffee?',
        options:[
            {
                name:'Capsules',
                descr:'Compatible with Nespresso systems and similar brewers'
            },
            {
                name:'Filter',
                descr:'Compatible with Nespresso systems and similar brewers'
            },
            {
                name:'Espresso',
                descr:'Compatible with Nespresso systems and similar brewers'
            },
        ]
    },

    {
        id:2,
        question:'What type of coffee?',
        options:[
            {
                name:'SingleOrigin',
                descr:'Compatible with Nespresso systems and similar brewers'
            },
            {
                name:'Decaf',
                descr:'Compatible with Nespresso systems and similar brewers'
            },
            {
                name:'Espresso',
                descr:'Compatible with Nespresso systems and similar brewers'
            },
        ]
    },

]

const Plan = () => {

    const handleClick=()=>{
        
    }
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Create a plan</h1>
          <div>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</div>
        </Container>
      </Wrapper>
      <Steps/>
      <div>
         {
            questions.map((item)=>(
                <div key={item.id} onClick={handleClick}>
                  <div>
                    <p>{item.question}</p>
                  </div>
                 <div>{item.options.map((itm)=>(
                    <div>{itm.name}</div>
                ))}</div>
              </div>
            ))
         }
      </div>
    </>
  )
}

export default Plan