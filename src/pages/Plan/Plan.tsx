import React,{useState} from 'react'
import Steps from '../../components/Steps/Steps';
import {Container,Wrapper,GridContainer,GridItem,Container2, ListBox, ListItem} from './Styles';
import { Options } from '../../Types';
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
      question:'How much would you like?',
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
            name:'Wholebean',
            descr:'Best choice if you cherish the full sensory experience'
        },
        {
          name:'Filter',
          descr:'For drip or pour-over coffee methods such as V60 or Aeropress'
       },
       {
        name:'Cafetiere',
        descr:'Course ground beans specially suited for french press coffee'
      },
    ]
},
 
{
  id:5,
  question:'How often should we deliver',
  options:[
      {
          name:'Every Week',
          descr:'$7.20 per shipment. Includes free first-class shipping.'
      },
      {
          name:'Every 2 weeks',
          descr:'$9.60 per shipment. Includes free priority shipping.'
      },
      {
          name:'Every Month',
          descr:'$12.00 per shipment. Includes free priority shipping.'
      },
  ]
},
    
]

const Plan = () => {
    const [active,setActive]=useState<number|null>(null);
    const [selectedOption, setSelectedOption] = useState<Options[]>([]);
    const [color,setColor]=useState<boolean>(false);

    
    
    const handleClick = (id:number, toggle = true) => {
      setActive(toggle && id === active ? null : id);
    };
    
    const handleListItemClick = (id:number) => {
      handleClick(id, false);
    };

    const handleOptionsClick = (questionId:number, optionName:string) => {
      setSelectedOption((prevSelectedOptions) => {
        const index = prevSelectedOptions.findIndex(
          (item) => item.questionId === questionId
        );
        if (index === -1) {
          // The question has not been answered before
          return [
            ...prevSelectedOptions,
            {
              questionId,
              selectedOption: optionName,
            },
          ];
        } else {
          const updatedSelectedOptions = [...prevSelectedOptions];
          updatedSelectedOptions[index].selectedOption = optionName;
          return updatedSelectedOptions;
        }
      });
    };
  
 
  
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Create a plan</h1>
          <div>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</div>
        </Container>
      </Wrapper>
      <Steps/>
      <div style={{display:'flex', gap:'10px'}}>
          <ListBox>
            <ListItem onClick={() => handleListItemClick(1)}>
                <span>01</span>
                <p>Preferences</p>
            </ListItem>
            <ListItem onClick={() => handleListItemClick(2)}>
                <span>02</span>
                <p>Type</p>
            </ListItem>
            <ListItem onClick={() => handleListItemClick(3)}>
                <span>03</span>
                <p>Quantity</p>
            </ListItem>
            <ListItem onClick={() => handleListItemClick(4)}>
                <span>04</span>
                <p>Options</p>
            </ListItem>
            <ListItem onClick={() => handleListItemClick(5)}>
                <span>05</span>
                <p>Delivery</p>
            </ListItem>
          </ListBox>
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
                      <GridItem  key={index} onClick={() => handleOptionsClick(item.id,itm.name)}>
                         <h3>{itm.name}</h3>
                         <p>{itm.descr}</p>
                      </GridItem>
                  ))}</GridContainer>
                  }   
              </Container2>
            ))
           }
            {selectedOption && selectedOption.map((item,index)=>(
               <div key={index}>
                  {item.selectedOption}
               </div>
           ))
           }
      </div>
    </div>
    </>
  )
}

export default Plan