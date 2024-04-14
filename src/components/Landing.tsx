import React from "react";
import Header from './Header';
import HeroSection from './HeroSection';
import Feature from './Feature';
import Services from './Services';
import Footer from './Footer';
    


const Landing=()=>{
    return <div>
        <Header/>
        <br />
        <HeroSection/>
        <br />
        <Services/>
        <br />
        <Feature/>
        <br />
        <Footer/>
        <br />  
        </div>;
}

export default Landing;