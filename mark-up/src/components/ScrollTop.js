import React,{useState}from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

export default function ScrollTop() {

const[scrollstate,setScrollstate]=useState(false)

const toTop=()=>{
  window.scrollTo({top:0})
}

window.addEventListener("scroll",()=>{
  window.pageYOffset>200 ? setScrollstate(true) : setScrollstate(false)
})

  return (
   <ToTop scrollstate={scrollstate} onClick={toTop}>
<img src={logo} alt=""/>

   </ToTop>
  )
}

const ToTop=styled.div`
display: ${({scrollstate})=>(scrollstate ? "block" : "none")};
position: fixed;
bottom: 1rem;
right: 2rem;
z-index:10;
cursor: pointer;

img{
  height: 1.5rem;
}
border-radius: 2rem;
background-color: blue;
padding: 1rem;
`;
