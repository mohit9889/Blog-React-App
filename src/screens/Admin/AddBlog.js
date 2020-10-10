import React, {useState} from 'react';
import "../../styles/Admin.css"
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { projectFirestore, timestamp, projectStorage } from "../../firebase/config";

const AddBlog = () => {
    const [heading, setHeading] = useState('');
    const [subHeading, setSubHeading] = useState('');
    const [image, setImage] = useState("");
    const [content, setContent] = useState('');
    const [progress, setprogress] = useState(0);

    const postImage = (event) => {
        event.preventDefault();

        const storageRef = projectStorage.ref("blogImages/" + image.name);
        
        return storageRef.put(image).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setprogress(percentage);
        }, (err) => {
            toast("Error in Image Uploading!");
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();

            if(
                !heading.length ||
                !subHeading.length ||
                !url.length ||
                !content.length 
            ) {
                toast("Field is Empty!"); 
            } else {
                projectFirestore.collection("blogs").doc().set({
                    heading: heading,
                    subHeading: subHeading,
                    content: content,
                    imageURL: url,
                    createdAt: createdAt
                })
                .then(res => {toast("Blog Added!")})
                .catch(err => toast("Error in Adding Blog!"))

                setContent('');
                setHeading('');
                setSubHeading('');
                setImage('');
                setprogress(0);
            }
        });
        
    }

    
    const handleImageChange = (e) => {
        let selected = e.target.files[0];

        if (selected) {
          setImage(selected);
        } else {
          setImage('');
        }
    }

    return (
        <div className="addblog">
            <h1>Add Blog</h1>
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
            <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
            ></motion.div>
            <form onSubmit={postImage} className="addblog-form">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Blog Heading</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        value={heading} 
                        onChange={(event) => {setHeading(event.target.value)}}
                        required
                        placeholder="Heading"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Blog Sub-Heading</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputPassword1"
                        value={subHeading} 
                        onChange={(event) => {setSubHeading(event.target.value)}} 
                        required
                        placeholder="Sub Heading"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Blog Content</label>
                    <textarea 
                        className="form-control" 
                        aria-label="With textarea"
                        value={content} 
                        onChange={(event) => {setContent(event.target.value)}} 
                        required
                        placeholder="Content"
                    >
                    </textarea>
                </div>
                <div className="custom-file form-group">
                    <input type="file" onChange={handleImageChange} name="file" id="file" className="inputfile" />
                    <label htmlFor="file">
                        <i className="fas fa-image"></i>
                        {image ? image.name : 'Choose a file'}
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddBlog;
