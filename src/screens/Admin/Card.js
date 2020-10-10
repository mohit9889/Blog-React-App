/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { projectFirestore, projectStorage } from "../../firebase/config"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = (props) => {
    const { allBlogs, setAllBlogs } = props;
    const { heading, subHeading, imageURL, id } = props.blog;

    const removeBlog = () => {
        if (!allBlogs) {
            return
        }
        projectFirestore.collection("blogs").doc(id).delete().then(function () {
            toast("Blog successfully deleted!");

            const imgRef = projectStorage.refFromURL(imageURL);
            imgRef.delete()
                .then(res => toast("Blog Image also Removed!"))
                .catch(err => toast("Error in removing Blog Image!"));
            
            const newAllBlogs = allBlogs.filter(item => item.id !== id);
            setAllBlogs(newAllBlogs);
        }).catch(function (error) {
            toast("Error in Removing Blog!")
        });
    }
    return (
        <div className="admin-blogs">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="card">
                <img src={imageURL} className="card-img-top" alt="blog" />
                <div className="card-body">
                    <h5 className="card-title">{heading}</h5>
                    <p className="card-text">{subHeading}</p>
                    <Link className="btn btn-primary" to={{ pathname: "/Admin/editblog", state: props.blog }}>
                        Edit Blog
                    </Link>
                    <a href="#" onClick={removeBlog} className="btn btn-danger">Delete Blog</a>
                </div>
            </div>
        </div>
    )
}

export default Card;
