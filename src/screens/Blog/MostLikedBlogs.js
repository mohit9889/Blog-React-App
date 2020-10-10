import React from "react";
import {Link} from "react-router-dom";

const MostLikedBlogs = props => {
  const { heading, imageURL, id} = props.blog;

  return (
    <div className="col-md-auto pb-4">
      <div className="image">
        <img src={imageURL} alt="" />
      </div>
      <Link to={{pathname:`/Blog/${id}`, state: props.blog }}>
        <p>
          {heading}
        </p>
      </Link>
    </div>
  );
};

export default MostLikedBlogs;
