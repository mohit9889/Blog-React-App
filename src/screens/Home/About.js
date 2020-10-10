import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="w3ls-about-grids row">
                    <div className="col-md-4 w3l-about-left">
                        <h2>Welcome</h2>
                        <h5>Integer mollis porttitor nibh, id pellentesque mauris porta et.</h5>
                        <p>Donec bibendum ligula sit amet auctor vulputate. Maecenas elementum, magna nec interdum venenatis, nibh enim gravida sem, id consectetur justo erat non tortor. Nam ultricies eget erat quis dapibus. Aenean eu scelerisque lacus, et fringilla odio.<span>Sed vestibulum sapien ornare ex sodales, eu feugiat ipsum tempor. Vivamus ante orci, congue sit amet aliquam non, sagittis eget justo. Curabitur mollis hendrerit nunc, id luctus sem vestibulum id.</span></p>
                    </div>
                    <div className="col-md-4 w3l-about-img">

                    </div>
                    <div className="col-md-4 w3l-about-right">
                        <h3>About Us</h3>
                        <h5>Integer mollis porttitor nibh, id pellentesque mauris porta et.</h5>
                        <p>Duis interdum malesuada nunc, nec vestibulum erat sagittis quis. Pellentesque imperdiet lorem ac auctor tempor. Donec convallis ligula eget mi consequat, sed euismod neque varius. Nulla eget risus nec ligula volutpat lacinia.</p>
                        <div className="w3l-button">
                            <Link to={"/About"}>More</Link>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    )
}

export default About;
