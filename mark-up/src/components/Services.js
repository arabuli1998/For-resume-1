import React from 'react'
import styled from 'styled-components'
import bag from '../assets/bag.png'
import plane from '../assets/plane.png'
import ship from '../assets/ship.png'
import world from '../assets/world.jpg'

export default function Services() {

  const data=[
    {
      icon:bag,
      title:'Get Best Prices',
      subtitle:'Compare prices across all of your favourite products and brands Australia-wide',
    },
    {
      icon:world,
      title:'Covid Safe',
      subtitle:'See a map with COVID-19 risk assessment by country, find travel requirements, recommendations, and information by vaccination status for global travel.',
    },
    {
      icon:plane,
      title:'Flexible Payment',
      subtitle:'A flexible payment plan allows consumers to purchase a product and pay for it over time',
    },
    {
      icon:ship,
      title:'Find The Best Near You',
      subtitle:'There are always people around so if in doubt, ask a local to point you the right way',
    },
  ]
  return (
    <Serviced id="Services">
{data.map((services,index)=>(
  <div className='service' key={index}>
    <div className='icon'>
    <img src={services.icon} alt="" />
    </div>
    <h3>{services.title}</h3>
    <p>{services.subtitle}</p>
  </div>
))}

    </Serviced>
  )
}

const Serviced=styled.section`
padding: 5rem 0;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;

.service{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  pad: 2rem;
  background-color: aliceblue;
  box-shadow: 0px 7px 25px 0px rgba(100,100,111,0.2);
  transition: 0.3s ease-in-out;
  :hover{
transform:translateX(0.4rem) translateY(-1rem);
box-shadow: 0px 6px 15px rgba(0,0,0,0.35);
  }
  .icon{
    img{
      height: 2.5rem;
    }
  }
}
@media screen and (min-width:200px) and (max-width:750px){
  grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
}
@media screen and (min-width:720px) and (max-width:1080px){
  grid-template-columns: repeat(2,1fr);
}
`;