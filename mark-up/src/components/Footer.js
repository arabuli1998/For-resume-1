import React from 'react'
import styled from 'styled-components'
import {BsLinkedin,BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer() {
  return (
    <FooterContainer id="footer">
      <span>Copyright &copy; 2022 Travelo. All rights reserved</span>
      <ul className='links'>
        <li>
          <Link to="/">Home</Link>
        </li> 
        <li>
          <Link to="Services">Services</Link>
        </li>
        <li>
          <Link to="Recommended">Recommended</Link>
        </li>
        <li>
          <Link to="Testimon">Testimonials</Link>
        </li>
      </ul>
      <ul className='Social-links'>
        <li><BsFacebook/></li>
        <li><BsLinkedin/></li>
        <li><AiFillInstagram/></li>
      </ul>
    </FooterContainer>
  )
}

const FooterContainer=styled.footer`
display: flex;
justify-content: space-around;
background-color:#d8d8ff;
padding: 2.5rem;
border-radius:0.5rem;
ul{
  display: flex;
  list-style-type: none;
  gap: 2rem;
  li{
    a{
      text-decoration: none;
      color: black;
      transition: 0ms.3s ease-in-out;
      
      :hover{
        color:#302ce9 ;
      }
    }
svg{
  font-size: 1.3rem;
  transition: 0ms.3s;
  cursor: pointer;
  :hover{
    color: #302ce9;
  }
}
  }
}

@media screen and (min-width:200px) and (max-width:1024px){
  flex-direction: column;
  gap:2rem;
  ul{
    flex-direction: column;
  }
  .social-links{
    flex-direction: column;
  }
}
`;