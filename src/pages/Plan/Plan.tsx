import React,{useState,useEffect} from 'react'
import Steps from '../../components/Steps/Steps';
import {Container,Wrapper,GridContainer,GridItem,Container2, ListBox, ListItem,Summary} from './Styles';
import { Options } from '../../Types';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { Question } from '../../Types';

const questions:Question[]=[
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
    const [isCapsulesSelected, setIsCapsulesSelected] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);
    const [totalPrices, setTotalPrices]=useState<number>(0)
   

   const calculateTotalPrice=()=>{
         const option=selectedOption.some((item)=>item.selectedOption==='250g');
         const option2=selectedOption.some((item)=>item.selectedOption==='500g');
         const option3=selectedOption.some((item)=>item.selectedOption==='1000g');
         
         const everyWeek=selectedOption.some((item)=>item.selectedOption==='Every Week')
         const every2Weeks=selectedOption.some((item)=>item.selectedOption==='Every 2 weeks')
         const everyMonth=selectedOption.some((item)=>item.selectedOption==='Every Month')
       
         //prices for 250G choice
         if (everyWeek && option){
            const totalPricePerWeek=7.20*4;
            setTotalPrices(totalPricePerWeek);
         }
         if (every2Weeks && option){
          const totalPricePerWeek=7.20*2;
          setTotalPrices(totalPricePerWeek);
       }
         if (everyMonth && option){
        const totalPricePerWeek=12.00;
        setTotalPrices(totalPricePerWeek);
     }

      //prices for 500G choice
      if (everyWeek && option2){
        const totalPricePerWeek=13*4;
        setTotalPrices(totalPricePerWeek);
     }
     if (every2Weeks && option2){
      const totalPricePerWeek=17.50*2;
      setTotalPrices(totalPricePerWeek);
   }
     if (everyMonth && option2){
    const totalPricePerWeek=22.00;
    setTotalPrices(totalPricePerWeek);
 }
  
  //prices for 1000G
  if (everyWeek && option3){
    const totalPricePerWeek=22*4;
    setTotalPrices(totalPricePerWeek);
   }
  if (every2Weeks && option3){
    const totalPricePerWeek=32*2;
    setTotalPrices(totalPricePerWeek);
   }
  if (everyMonth && option3){
   const totalPricePerWeek=42.00;
   setTotalPrices(totalPricePerWeek);
  }
 }
 
    const handleClick = (id:number, toggle = true) => {
      setActive(toggle && id === active ? null : id);
    };
    
    const handleListItemClick = (id:number) => {
      if (id === 4 && selectedOption.some(option => option.selectedOption === 'Capsules')) {
        return;
    }
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

      if(questionId===1 && optionName==='Capsules'){
        setIsCapsulesSelected(true);
      }else{
        setIsCapsulesSelected(false);
      }
    };
  
    const handleButtonClick=()=>{
          setModal(true);
          calculateTotalPrice();
    }

    const disapleButton=()=>{
      if(selectedOption.length===5 || selectedOption.length===4){
          setIsDisabled(false);
      }
    }

 useEffect(()=>{
   disapleButton();
 }, [selectedOption])
 
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
                <p>Bean Type</p>
            </ListItem>
            <ListItem onClick={() => handleListItemClick(3)}>
                <span>03</span>
                <p>Quantity</p>
            </ListItem>
            <ListItem onClick={() => handleListItemClick(4)}
              style={{ opacity: isCapsulesSelected ? 0.5 : 1, pointerEvents: isCapsulesSelected ? "none" : "auto" }}>
                <span>04</span>
                <p>Grind Options</p>
            </ListItem>
            <ListItem onClick={() => handleListItemClick(5)}>
                <span>05</span>
                <p>Deliveries</p>
            </ListItem>
          </ListBox>
            <div>
            {
            questions.map((item)=>(
                <Container2 key={item.id}>
                  <button onClick={()=>handleClick(item.id)}
                   disabled={item.id === 4 && selectedOption[0]?.selectedOption.includes('Capsules')}
                   style={{opacity:item.id === 4 && selectedOption[0]?.selectedOption.includes('Capsules')?0.5:1}}
                   >
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
        <Summary>
           <h4>Order Summary</h4>
           <p>"I drink my coffee using <span>{selectedOption[0]?.selectedOption}</span>, with a <span>{selectedOption[1]?.selectedOption}</span> type of bean, <span>{selectedOption[2]?.selectedOption}</span> sent to me <span>{selectedOption[4]?.questionId===5
           ?`${selectedOption[4].selectedOption}`
           : selectedOption[3]?.questionId===5
           ? `${selectedOption[3].selectedOption}`
           :''}</span>"</p>
        </Summary>
        <Button text='create plan' onClick={handleButtonClick} 
                style={{opacity:isDisabled?0.3:1,
                pointerEvents: isDisabled ? "none" : "auto" }}
                />
           {
            modal && <>
              <Modal setModal={setModal} selectedOption={selectedOption} totalPrices={totalPrices}/>
            </>
           }     
         </div>
       </div>
    </>
  )
}

export default Plan