/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import "../styles/ReadBlogPage.css";
import ReactMarkdown from 'react-markdown';
import { projectFirestore } from "../firebase/config";
import LoaderSpinner from "./../components/Loader";

const ReadBlogPage = (props) => {
    const { blog }  = props.location;
    const { id } = props.match.params;
    const [loading, setloading] = useState(true);
    const [newBlog, setNewBlog] = useState({
        imageURL: undefined,
        heading: undefined,
        subHeading: undefined,
        content: undefined
    });

    let { heading, subHeading, imageURL, content } = blog ? blog : newBlog; 

    useEffect(() => {
        if(!heading) {
            fetchBlog();
        } else {
            setNewBlog(blog);
            setloading(false);
        }
    }, [])

    const fetchBlog = () => {
        projectFirestore.collection("blogs").doc(id).get()
            .then(doc => {
                const { heading, subHeading, imageURL, content } = doc.data();

                setNewBlog({
                    imageURL: imageURL,
                    heading: heading,
                    subHeading: subHeading,
                    content: content
                });

                setloading(false);
            })
            .catch(err => {
                console.log(err);
                setloading(false);
            })
    }

    return (
        <div className="readblog">
        <LoaderSpinner visible={loading}></LoaderSpinner>
        <div className="container-fluid h-100">
            {(newBlog && !loading) ? 
                <div className="row h-100">
                    <div className="img-container col-sm-12 col-md-6 h-100 bg-dark text-white d-flex align-items-center justify-content-center" id="left">
                        <img src={imageURL} className="" alt="blog-img" width="100%" height="100%" />
                    </div>
                    <div className="col-sm-12 invisible col-md-6"></div>
                    <div className="content col py-2">
                        <h1>{heading}</h1>
                        <h5>{subHeading}</h5>
                        <ReactMarkdown
                            source={content}
                        />
                        {/* <p>{content}</p> */}
                    </div>
                </div> : 
            null}
        </div>
        </div>
    ) 
}

export default ReadBlogPage
