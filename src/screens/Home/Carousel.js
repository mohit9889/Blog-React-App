import React from 'react';
import "../../styles/Carousel.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Typical from "react-typical";
import { Link } from "react-router-dom";

import { slider1, slider2, slider3 } from "../../images";

const Carousel = () => {

    return (
        <div>
            <div className="site-wrap">
                <section className="site-blocks-cover overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">

                                <div className="row">
                                    <div className="col-lg-11">

                                        <h1>Hey, I am{' '}
                                        <Typical 
                                            loop={Infinity}
                                            wrapper="b"
                                            steps={[
                                                'Mohit Rajput.',
                                                1000,
                                                "Photographer.",
                                                1000
                                            ]}
                                        />
                                        </h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modiblanditiis error.</p>
                                        <Link to={"/Blog"}>
                                            <button>
                                                My Blog
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12" style={{ marginTop: '-7%' }}>
                                <OwlCarousel
                                    className="owl-theme"
                                    loop
                                    nav
                                    items={1}
                                    autoplay
                                    dots={false}
                                >
                                    <div className="item"><img src={slider1} alt="img" /></div>
                                    <div className="item"><img src={slider2} alt="img" /></div>
                                    <div className="item"><img src={slider3} alt="img" /></div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Carousel;
