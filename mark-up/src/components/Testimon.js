import React from 'react'
import styled from 'styled-components'
import avatarimage from '../assets/avatarimage.jpg'
import albert from '../assets/albert.jpg'

export default function Testimon() {
  return (
    <Section id="Testimon">
      <div className='title'>
        <h2>Happy Customers</h2>
      </div>

      <div className='testimonials'>
        <div className='testimonial'>
          <p>
            When you approach Racha, 
            you get the feeling that 
            something unusual is coming...
            </p>
            <div className='info'>
              <img src={avatarimage} alt=""/>
              <div className='details'>
                <h4>George Arabuli</h4>
                <span>GEO - Production Web Solutions</span>
              </div>
            </div>
        </div>

        <div className='testimonial'>
          <p>
            When you approach Racha, 
            you get the feeling that 
            something unusual is coming...
            </p>
            <div className='info'>
              <img src={albert} alt=""/>
              <div className='details'>
                <h4>Albert Einstein </h4>
                <span>German-born theoretical physicist</span>
              </div>
            </div>
        </div>
        
      </div>

    </Section>
  )
}

const Section=styled.section`
margin:5rem 0;
.title{
  text-align: center;
  margin-bottom: 2rem;
}

.testimonials{
  display: flex;
  justify-content: center;
  margin: 0%.2rem;
  gap: 2rem;
  .testimonial{
    background-color: aliceblue;
    padding: 2rem;
    border-radius: 0%.5rem;
    box-shadow:0px 7px rgba(100,100,111,0.2);
    transition: 0.3s ease-in-out;
    :hover{
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: 0px 5px 15px rgba(0,0,0,0.35);
    }
    .info{
      display: flex;
      justify-content: center;
      gap:1rem;
      align-items: center;
      margin-top: 1rem;

      img{
        height: 3rem;
        border-radius: 3rem;
      }
      .details{
        span{
          font-size: 0.9rem;
        }
      }
    }
  }
}
@media screen and (min-width:200px) and (max-width:768px){
  .testimonials{
flex-direction: column;
margin: 0;
.testimonial{
  justify-content: center;
  .info{
    flex-direction: column;
    justify-content: center;
  }
}
  }
}
`;