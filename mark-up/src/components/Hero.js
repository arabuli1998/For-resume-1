import React from 'react'
import styled from 'styled-components'
import heroImage from '../assets/heroImage.jpg'


export default function Hero() {
  return (
    <Section id="Hero">
      <div className='background'>
        <img src={heroImage} alt=""/>
      </div>

      <div className='content'>

        <div className='title'>
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Read a travel guide about Bangkok to practise and improve your reading skills.
             Do the preparation task first. Then read the text and do the exercises.
          </p>
        </div>

        <div className='search'>
        <div className='container'>
          <label htmlFor=''>Where you want to go</label>
          <input type="text" placeholder="Search tour location"/>
        </div>

        <div className='container'>
          <label htmlFor=''>Check in</label>
          <input type="date" />
        </div>

        <div className='container'>
          <label htmlFor=''>Check out</label>
          <input type="date" />
        </div>
        <button>Explore now</button>
      </div>
      </div>
    </Section>
  )
}

const Section=styled.section`
position: relative;
margin-top: 2rem;
width: 100%;
height: 100%;

.background{
  height: 100%;
  background-image: url();
  img{
    width: 100%;
    filter:brightness(80%);
    border-radius: 15px;
  }
}
.content{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;


  .title{
color: white;
h1{
  font-size: 3rem;
  letter-spacing: 0.2rem;
}
p{
  text-align: center;
  padding: 0 30vw;
  margin-top: 0%.5rem;
  font-size: 1.2rem;
}
  }

  .search{
    display: flex;
    background-color:#ffffffce;
    padding: 1rem;
    border-radius: 0.5rem;

    .container{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 1.5rem;
      
      label{
        font-size: 1.1rem;
        color:#03045e;
      }
      input{
        background-color: transparent;
        border: none;
        text-align: center;
        color: black;
        &::placeholder{
          color: black;
        }
        &:focus{
          outline: none;
        }
      }
    }
    button{
      cursor: pointer;
      padding: 1rem;
      border-radius: 0.3rem;
      border: none;
      color: white;
      background-color: #4361ee;
      font-size: 1.1rem;
      text-transform: uppercase;
      transition: 0ms.3s ease-in-out;
      &:hover{
        background-color: #023e8a;
      }
    }
  }
}
@media screen and (min-width:200px) and (max-width:850px){
  height: 25rem;
  .background{
    img{
      height: 100%;
    }
  }
  .content{
    .title{
      h1{
        font-size: 1rem;
      }
      p{
        font-size: 0.8rem;
        padding: 1vw;
      }
    }
    .search{
      flex-direction: column;
      padding: 0.8rem;
      gap: 0.8rem;
      .container{
        padding: 0 0.8rem;
        input[type="date"]{
          padding-left: 1rem;
        }
      }
      button{
        padding: 1rem;
        font-size: 1rem;
      }
    }
  }
}
`;