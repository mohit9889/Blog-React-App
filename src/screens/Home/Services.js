import React from "react";

const Services = () => {


  return (
    <div className="services">
      <div className="container">
      <h2>My Passions</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="single-service text-center">
              <i className="fas fa-video"></i>
              <h3>Videography</h3>
              <hr />
              <p>Lorem ipsum dolor sit amet, sed do eiusmod videus chatum incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="single-service text-center">
              <i className="fas fa-camera"></i>
              <h3>Photography</h3>
              <hr></hr>
              <p>Lorem ipsum dolor sit amet, sed do eiusmod videus chatum incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="single-service text-center">
              <i className="fas fa-portrait"></i>
              <h3>Portraits</h3>
              <hr />
              <p>Lorem ipsum dolor sit amet, sed do eiusmod videus chatum incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;