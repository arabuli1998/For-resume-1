import React,{useState} from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    const[navbarState,setNavbarState]=useState(false)
  return (
    <>
    <Nav>
        <div className='brand'>
            <div className='container'>
              <img src={logo} alt=""/>
              Travel
            </div>
            <div className='toggle'>
                {
                    navbarState? <VscChromeClose onClick={()=>setNavbarState(false)} style={{cursor:'pointer'}}/> 
                    : <GiHamburgerMenu onClick={()=>setNavbarState(true)}  style={{cursor:'pointer'}}/>
                }
            </div>
        </div>
        <ul>
           <li><Link to="">Home</Link></li> 
           <li><Link to="Services">Services</Link></li>
           <li><Link to="Recommended">Recommended</Link></li>
           <li><Link to="Testimon">Testimonials</Link></li>
        </ul>
        <button>Connect</button>
    </Nav>
    <ResponsiveNav state={navbarState}>
    <ul>
           <li>
               <Link to="hero" onClick={()=>setNavbarState(false)}>Home</Link>
            </li> 
           <li>
               <Link to="Services" onClick={()=>setNavbarState(false)}>Services</Link>
            </li>
           <li>
               <Link to="Recommended" onClick={()=>setNavbarState(false)}>Recommended</Link>
            </li>
           <li>
               <Link to="Testimonials" onClick={()=>setNavbarState(false)}>Testimonials</Link>
            </li>
        </ul>
    </ResponsiveNav>
    </>
  )
}


const Nav=styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

.brand{
    .container{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:0.4rem;
        font-size: 1.2rem;
        font-weight: 850;
        text-transform: uppercase;

        img{
            max-width: 40px;
        }
    }
    .toggle{
        display: none;
    }
    }
    ul{
        display: flex;
        list-style-type: none;
        gap: 1rem;

        li{
            a{
                text-decoration: none;
                color: #023e5a;
                font-size: 1.2rem;
                transition:0.2ms.1s ease-in-out;
                cursor: pointer;
            &:hover{
                color: #023e8a;
            }
            }
            &:first-of-type{
               a{
                   color: #023e8a;
                   font-weight: 850;
               } 
            }
        }
}
button{
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color:#48cae4 ;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    transition: 0ms.3s ease-in-out;
    &:hover{
        background-color:#023e8a;
    }
}
@media screen and (min-width:200px) and (max-width:1080px){
    .brand{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .toggle{
            display: block;
        }
    }
    ul ,button{
        display: none;
    }
}
`;

const ResponsiveNav=styled.div`
display: flex;
position: absolute;
z-index: 5;
background-color: white;
width: 97%;
height: 30vh;
align-items: center;
transition:0.3s ease-in-out;
top:${({state})=>state?"50px" : "-400px"};
ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
   
    align-items: center;
    width: 100%;
    li{
       
        margin: 1rem 0;
        
        a{
            text-decoration: none;
              color: #0077b6;
              font-size: 1.2rem;
              transition: 0.2s ease-in-out;
              cursor: pointer;
              :hover{
                  color: #023e8a;
              }
        }
        :first-of-type{
            a{
                color:#023e8a;
                font-weight: 800;
            }
        }
    }
}
`;