import React from 'react';
import { Link } from "react-router-dom";

import { image1, image2, image3, image4, image5, image6, image7 } from "../../images";

const Gallery = () => {
    return (
        <div className="home-gallery">
            <div className="container">
                <h2>See My Work</h2>
                <div className="row">
                    <div className="img-col col-lg-4 col-md-5 col-sm-6 col-xs-12">
                        <img src={image1} alt="gallery" />
                    </div>
                    <div className="img-col col-lg-4 col-md-5 col-sm-6 col-xs-12">
                        <img src={image2} alt="gallery" />
                    </div>
                    <div className="img-col col-lg-4 col-md-5 col-sm-6 col-xs-12">
                        <img src={image3} alt="gallery" />
                    </div>
                </div>
                <div className="row">
                    <div className="img-col col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <img src={image4} alt="gallery" />
                    </div>
                    <div className="img-col col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <img src={image5} alt="gallery" />
                    </div>
                    <div className="img-col col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <img src={image6} alt="gallery" />
                    </div>
                    <div className="img-col col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <img src={image7} alt="gallery" />
                    </div>
                </div>
                <Link to={"/Gallery"}>
                    <button>
                            My Gallery
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Gallery;
