import React,{useEffect} from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommended from "./components/Recommended";
import ScrollTop from "./components/ScrollTop";
import Services from "./components/Services";
import Testimon from "./components/Testimon";
import scrollreveal from 'scrollreveal'

function App() {
  useEffect(()=>{
    const sr=scrollreveal({
      origin:'top',
      distance:'80px',
      duration:2000,
      reset: true,

    })
    .reveal(
      `
      nav,
      #Hero,
      #services,
      #Recommended,
      #testimon
      `,
      {
opacity: 0,
interval:200,
      }
    );
  },[]);
  return (
    <>
      <ScrollTop />
      <Navbar/>
      <Hero/>
      <Services/>
      <Recommended/>
      <Testimon/>
      <Footer/>
    </>
  );
}

export default App;
