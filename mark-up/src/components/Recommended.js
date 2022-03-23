import React,{useState} from 'react'
import tokyo from '../assets/tokyo.jpg'
import singapore from '../assets/singapore.jpg'
import tbilisi from '../assets/tbilisi.jpg'
import moscow from '../assets/moscow.jpeg'
import telavi from '../assets/telavi.jpg'
import riodejaneiro  from '../assets/riodejaneiro.jpg'
import styled from 'styled-components';

export default function Recommended() {

  const data=[

    {
      image:singapore,
      title:'Singapore',
      subtitle:'Singapore, Officialy thr Republic of Singapore, is a',
      cost:'35.550',
      duration:'Approx 2 night trip',
    },
    {
      image:tokyo,
      title:'Tokyo',
      subtitle:'Tokyo, Capital of Japan',
      cost:'39,590',
      duration:'Approx 3 night trip',
    },
    {
      image:tbilisi,
      title:'Tbilisi',
      subtitle:'Tbilisi, Capital of Georgia',
      cost:'25,325',
      duration:'Approx 4 night trip',
    },
    {
      image:riodejaneiro ,
      title:'Rio de Janeiro ',
      subtitle:'Rio de Janeiro  is one of the 27 federative units of Brazil.',
      cost:'35.550',
      duration:'Approx 2 night trip',
    },
    {
      image:moscow,
      title:'Moscow',
      subtitle:'Tokyo, Capital of Japan',
      cost:'39,590',
      duration:'Approx 3 night trip',
    },
    {
      image:telavi,
      title:'Telavi',
      subtitle:'Telavi is the main city and administrative center of Georgia"s eastern province of Kakheti',
      cost:'25,325',
      duration:'Approx 4 night trip',
    },
  ];


  const packages=[
    'The weekend break',
    'The package holiday',
    'The group tour',
    'Long term slow tour'
  ];

  const[active,setActive]=useState(1)

  return (
    <Section id="Recommended">
      <div className='title'>
        <h2>Recommned destinations</h2>
      </div>
      <div className='packages'>
        <ul>
          {
            packages.map((item,index)=>(
              <li key={index} className={active===index+1 ? "active" : ""}
               onClick={()=>{setActive(index+1)}}>
                 {item}
               </li>
            ))
          }
        </ul>
      </div>
      <div className='destinations'>
        {
          data.map((destination,index)=>(
            <div className='destination' key={index}>
              <nav style={{backgroundImage:`url(${destination.image})`}}/>
              <h3>{destination.title}</h3>
              <p>{destination.subtitle}</p>
              <div className='info'>
              <div className='services'>
                
            </div>
            <h4>{destination.cost}</h4>
            </div>
            <div className='distance'>
              <span>1000kms</span>
              <span>{destination.duration}</span>
            </div>
            </div>
          ))
        }
      </div>

    </Section>
  )
}

const Section=styled.section`
padding: 2rem 0;

.title{
  text-align:center;
}

.packages{
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul{
      display: flex;
      list-style-type: none;
      width: max-content;
      li{
        padding: 1rem 2rem;
        border-bottom: 0.2rem solid black;
      }
      .active{
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }

  .destinations{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:3rem;
    .destination{
      display: flex;
      padding: 1rem;
      flex-direction: column;
      gap:0.5rem;
      background-color:#8338ec14;
      border-radius:1rem;
      transition:0.3s ease-in-out;
      cursor: pointer;
      :hover{
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow:0px 5px 15px  rgba(0,0,0,0.4) ;
      }
      nav{
        width: 100%;
       height: 200px;
       background-position: center;
       background-size:cover;
       background-repeat:no-repeat;
      }
      .info{
        display: flex;
        align-items: center;
        .services{
          display: flex;
          gap: 0.3rem;
          img{
            width:2rem;
            border-radius: 1rem;
            background-color: #4d2ddb84;
            padding:0.2rem 0.4rem;

          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance{
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width:200px) and (max-width:768px){
  .packages{
ul{
  li{
    padding: 0 0.5rem;
    font-size: 2vh;
    padding-bottom: 1rem;
  }
  .active{
    border-bottom-width:0.3rem;
  }
}
  }
  .destinations{
grid-template-columns: 1fr;
padding: 0;
.destination{
nav{
  height: 250px;
}
  }
  
}
`;
