import React,{useState} from 'react'
import Steps from '../../components/Steps/Steps';
import {Container,Wrapper,GridContainer,GridItem,Container2} from './Styles';

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
                descr:'For pour over or drip methods like Aeropress, Chemex, and V60'
            },
            {
                name:'Espresso',
                descr:'Dense and finely ground beans for an intense, flavorful experience'
            },
        ]
    },
{
        id:2,
        question:'What type of coffee?',
        options:[
            {
                name:'SingleOrigin',
                descr:'Distinct, high quality coffee from a specific family-owned farm'
            },
            {
                name:'Decaf',
                descr:'Just like regular coffee, except the caffeine has been removed'
            },
            {
                name:'Espresso',
                descr:'Combination of two or three dark roasted beans of organic coffees'
            },
        ]
    },

    {
      id:3,
      question:'How much would you like',
      options:[
          {
              name:'250g',
              descr:'Perfect for the solo drinker. Yields about 12 delicious cups.'
          },
          {
              name:'500g',
              descr:'Perfect option for a couple. Yields about 40 delectable cups.'
          },
          {
              name:'1000g',
              descr:'Perfect for offices and events. Yields about 90 delightful cups.'
          },
      ]
  },
  {
    id:4,
    question:'want us to grind them?',
    options:[
        {
            name:'yes',
            descr:'ok'
        },
    ]
},
    
]

const Plan = () => {
    const [active,setActive]=useState<number|null>(null);
    
    const handleClick=(id:number)=>{
        if(id===active){
          setActive(null)
        }else{
          setActive(id)
        }
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
                <Container2 key={item.id}>
                  <button onClick={()=>handleClick(item.id)}>
                    {item.question}
                  </button>
                  {
                    active===item.id&&
                    <GridContainer>{item.options.map((itm,index)=>(
                      <GridItem  key={index}>
                         <h3>{itm.name}</h3>
                         <p>{itm.descr}</p>
                      </GridItem>
                  ))}</GridContainer>
                  }   
              </Container2>
            ))
           }
      </div>
    </>
  )
}

export default Plan