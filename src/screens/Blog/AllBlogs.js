/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link} from "react-router-dom"

const AllBlogs = props => {
  const { heading, subHeading, imageURL, content, createdAt, id } = props.blog;
  const date = new Date(createdAt.seconds * 1000).toString().split(" ");

  return (
    <div className="blog-1">
      <div className="row">
        <div className="image col-md-auto">
          <img src={imageURL} alt="" />
        </div>

        <div className="content col-md-auto">
          <h1 className="content-heading">
            {heading}
          </h1>
          <p className="content-date">
            Posted at <span>{date[1] + " "+date[2] + "," + date[3]}</span>
          </p>
          <p className="subheading">
            {subHeading}
          </p>
          <p className="blog-content">{content}</p>
          <div className="button-group">
            <div className="social-icon">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </div>
            <Link to={{pathname:`/Blog/${id}`, state: props.blog }}>
            <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
