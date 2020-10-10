import React from "react";
import {Link} from "react-router-dom";

const LatestBlog = props => {

  const { heading, subHeading, imageURL, id } = props.blog;
  
  return (
    <div className="latest-blog">
      <div className="row">
        <div className="image col-md-6">
          <img src={imageURL} alt="" />
        </div>

        <div className="content col-md-6">
          <h1>{heading}</h1>
          <h4 className="tagline">
            {subHeading}
          </h4>
          <Link to={{pathname:`/Blog/${id}`, blog: props.blog }}>
            <button onClick={props.click}>
              Read More
              <i className="fas fa-arrow-right" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
