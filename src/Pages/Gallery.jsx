import React from "react";

 import Header  from "../components/Header"
 import Footer  from  "../components/Footer"
 import Navbar from  "../components/Navbar"
import CountryDiv from "../components/CountryDiv";
import australiaImg from "../assets/au.png"; 
import chinaImg from "../assets/china.png"; 
import franceImg from "../assets/france.png"; 
import germanyImg from "../assets/germany.png"; 
import israelImg from "../assets/isarel.png"; 

const Main = () => {

  const countries = [
    { name: 'Australia', image: australiaImg },
    { name: 'China', image: chinaImg },
    { name: 'France', image: franceImg },
    { name: 'Germany', image: germanyImg },
    { name: 'Israel', image: israelImg }
    
  ];

  return(

    <main className="container my-5">
    <div className="row">
      {countries.map((country, index) => (
        <CountryDiv key={index} image={country.image} name={country.name} />
      ))}
    </div>
  </main>

  )
  
}


const Gallery = () => {
  return (
    <div>
       <Navbar />
        <Header></Header>
        <Main></Main>
    </div>
  )
}


export default Gallery;
