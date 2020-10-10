/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import "../../styles/Admin.css"
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/Navbar"
import { projectFirestore, timestamp, projectStorage } from "../../firebase/config";
import Tabbar from './Tabbar';

const EditBlog = (props) => {
    const { heading, subHeading, imageURL, content, id } = props.location.state;
    const [updatedHeading, setupdatedHeading] = useState('');
    const [updatedSubHeading, setupdatedSubHeading] = useState('');
    const [updateContent, setupdateContent] = useState('');
    const [updateImage, setupdateImage] = useState();
    const [updateImageURL, setupdateImageURL] = useState('')
    const [progress, setprogress] = useState(0);

    useEffect(() => {
        setupdatedHeading(heading);
        setupdatedSubHeading(subHeading);
        setupdateContent(content);
        setupdateImageURL(imageURL);
    }, [])

    const postBlog = async (event) => {
        event.preventDefault();

        if (updateImage) {
            const storageRef = projectStorage.ref("blogImages/" + updateImage.name);
            const collectionRef = projectFirestore.collection("blogImage");

            storageRef.put(updateImage).on('state_changed', (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setprogress(percentage);
            }, (err) => {
                toast("Error in Image Uploading!");
            }, async () => {
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp();
                await collectionRef.add({ url, createdAt });

                projectFirestore.collection("blogs").doc(id).update({
                    heading: updatedHeading,
                    subHeading: updatedHeading,
                    content: updateContent,
                    imageURL: url
                })
                .then(res => toast("Blog Update!"))
                .catch(err => toast("Error in Blog Updation!"))

                setupdateContent('');
                setupdatedSubHeading('');
                setupdateImage('');
                setupdatedHeading('');
                setupdateImageURL('');

            });
        } else {
            projectFirestore.collection("blogs").doc(id).update({
                heading: updatedHeading,
                subHeading: updatedHeading,
                content: updateContent,
                imageURL: updateImageURL
            })
            .then(res => toast("Blog Update!"))
            .catch(err => toast("Error in Blog Updation!"))

            setupdateContent('');
            setupdatedSubHeading('');
            setupdateImage('');
            setupdatedHeading('');
            setupdateImageURL('');
        }
    }


    const handleImageChange = (e) => {
        let selected = e.target.files[0];

        if (selected) {
            setupdateImage(selected);
        } else {
            setupdateImage('');
        }
    }

    return (
        <div className="addblog">
            <Navbar />
            <Tabbar />
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
            <h1>Update Blog</h1>
            <motion.div className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: progress + '%' }}
            ></motion.div>
            <form onSubmit={postBlog} className="addblog-form">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Blog Heading</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={updatedHeading}
                        onChange={(event) => { setupdatedHeading(event.target.value) }}
                        placeholder="Heading"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Blog Sub-Heading</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={updatedSubHeading}
                        onChange={(event) => { setupdatedSubHeading(event.target.value) }}
                        placeholder="Sub Heading"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Blog Content</label>
                    <textarea
                        className="form-control"
                        aria-label="With textarea"
                        value={updateContent}
                        onChange={(event) => { setupdateContent(event.target.value) }}
                        placeholder="Content"
                    >
                    </textarea>
                </div>
                <div className="custom-file form-group">
                    <input type="file" onChange={handleImageChange} name="file" id="file" className="inputfile" />
                    <label htmlFor="file">
                        <i className="fas fa-image"></i>
                        {updateImage ? updateContent.name : 'Choose a file'}
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Update Blog</button>
            </form>
        </div>
    );
}

export default EditBlog;
