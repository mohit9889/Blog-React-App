import React, { useState, useEffect } from 'react';
import LoaderSpinner from "../../components/Loader";
import "../../styles/Admin.css";
import Card from "./Card";
import { projectFirestore } from "../../firebase/config"

const Blogs = () => {
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
                    const { heading, subHeading, imageURL, content } = doc.data();
                    blogs.push({
                        heading: heading,
                        subHeading: subHeading,
                        imageURL: imageURL,
                        id: doc.id,
                        content: content
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

    const renderBlogs = () => {
        const rows = allBlogs.length / 3;
        const blogs = [];
        for (let i = 0; i < rows; i++) {
            blogs.push(
                <div key={i} className="row">
                    {allBlogs[3 * i] ?
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <Card
                                allBlogs={allBlogs}
                                setAllBlogs={setAllBlogs}
                                blog={allBlogs[3 * i]}
                            />
                        </div> : null}
                    {allBlogs[3 * i + 1] ?
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <Card
                                allBlogs={allBlogs}
                                setAllBlogs={setAllBlogs}
                                blog={allBlogs[3 * i + 1]}
                            />
                        </div> : null}
                    {allBlogs[3 * i + 2] ?
                        <div className=" col-md-3 col-sm-6 col-xs-12">
                            <Card
                                allBlogs={allBlogs}
                                setAllBlogs={setAllBlogs}
                                blog={allBlogs[3 * i + 2]}
                            />
                        </div> : null}
                </div>
            )
        }
        return blogs;
    }

    return (
        <div className="admin-allblog">
            <h1>All Blog</h1>
            {allBlogs.length !== 0 ? 
                <div>
                    <LoaderSpinner visible={loading}></LoaderSpinner>
                    <div className="container admin-all-blogs">
                        {
                            renderBlogs()
                        }

                    </div>
                </div>
             : <h1 className="no-blog">No Blogs Yet! Please add blog!</h1>}
        </div>
    );
}

export default Blogs;
