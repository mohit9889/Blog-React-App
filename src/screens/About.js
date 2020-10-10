import React from 'react';
import "../styles/About.css";
import Navbar from "../components/Navbar"
import Footer from "./../components/Footer";

const About = () => {
    return (
        <div>
            <Navbar />
        
        <div className="about_container">
            <h1>About Me</h1>
            <div className="grid_container">
                <div className="about-image" />

                <div className="details">
                    <p className="details_1">Who is behind?</p>
                    <p className="details_2">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                        Maecenas sed diam eget risus varius blandit sit amet non magna.
                        Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula
                        porta felis euismod semper.
                    </p>
                    <p className="details_3">
                        “Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis
                        natoque penatibus.”
                    </p>
                    <p className="details_2">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Donec ullamcorper nulla non.
                    </p>

                    <p className="details_1">Elsewhere</p>
                    <div className="social">
                        <div className="twitter social_logo" />
                        <div className="fb social_logo" />
                        <div className="insta social_logo" />
                        <div className="pin social_logo" />
                    </div>
                </div>

                <div className="who">
                    Who am I?
                    <p className="who_1">
                        I’m a freelance photographer specializing in landscape, advertorial
                        and conceptual photography, based in New York. I love to turn ideas
                        into beautiful things.
                    </p>
                </div>

                <div className="why">
                    Why choose me?
                    <p className="why_1">
                        Duis mollis, est non commodo luctus, nisi porttitor ligula, eget
                        lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare
                        sem lacinia quam.
                        <br /> <br />
                        1. Vivamus sagittis lacus vel augue laoreet. <br />
                        2. Cras mattis consectetur purus sit amet. <br />
                        3. Vestibulum id ligula porta felis euismod.
                    </p>
                </div>

                <div className="skills">
                    My skills
                    <div className="bars">
                        Photoshop
                        <div className="w3-border">
                            <div className="photoshop" />
                        </div>
                        <br />
                        Final Cut
                            <div className="w3-border">
                            <div className="final_cut" />
                        </div>
                        <br />
                            Studio Photography
                            <div className="w3-border">
                            <div className="studio" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default About;
