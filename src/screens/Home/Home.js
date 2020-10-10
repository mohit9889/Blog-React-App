import React from 'react';
import Navbar from "../../components/Navbar"
import '../../styles/Home.css';
import About from "./About";
import Carousel from "./Carousel";
import Services from "./Services";
import Footer from "../../components/Footer";
import Gallery from "./Gallery";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <About />
            <Services />
            <Gallery />
            <Footer />
        </div>
    );
}

export default Home;
