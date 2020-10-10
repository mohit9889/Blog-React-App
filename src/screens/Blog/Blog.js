import React, { useState, useEffect } from 'react';
import "../../styles/Blog.css";
import { projectFirestore } from "../../firebase/config";
import LoaderSpinner from "../../components/Loader";

//components
import Navbar from "../../components/Navbar"
import LatestBlog from "./LatestBlog";
import MostLikedBlogs from "./MostLikedBlogs";
import AllBlogs from "./AllBlogs";
import Footer from "../../components/Footer";

const Blog = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        getAllBlogs();

    }, [])

    const getAllBlogs = () => {
        const blogs = [];

        setloading(true);

        projectFirestore.collection("blogs").get()
            .then(snapshoot => {
                snapshoot.docs.forEach(doc => {
                    const { heading, subHeading, imageURL, content, createdAt } = doc.data();
                    blogs.push({
                        heading: heading,
                        subHeading: subHeading,
                        imageURL: imageURL,
                        id: doc.id,
                        content: content,
                        createdAt: createdAt
                    });
                })
                setAllBlogs(blogs);
                setloading(false);
            })
            .catch(err => {
                console.log(err);
                setloading(false);
            })
    }

    return (
        <div className="blog-container">
            <Navbar />
            <LoaderSpinner visible={loading}></LoaderSpinner>
            <div className="inner-blog-container">
                {allBlogs[0] ? <LatestBlog blog={allBlogs[0]} /> : null}
                {allBlogs.length !== 0 ?
                    <div>
                        <div className="most-liked">
                            {allBlogs[0] ? <h1>Most Liked Posts</h1> : null}
                            <div className="row">
                                {allBlogs[0] ? <MostLikedBlogs blog={allBlogs[0]} /> : null}
                                {allBlogs[1] ? <MostLikedBlogs blog={allBlogs[1]} /> : null}
                                {allBlogs[2] ? <MostLikedBlogs blog={allBlogs[2]} /> : null}
                            </div>
                        </div>

                        <div className="all-blogs">
                            {allBlogs[0] ? <h1 className="head-line">Read All Blogs</h1> : null}
                            {
                                allBlogs.map((blog, index) => <AllBlogs blog={blog} key={index} />)
                            }
                        </div>
                    </div>
                    : loading ? null : <h1 className="no-blog">No Blogs are Available!</h1>}
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
