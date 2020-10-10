import React, { useState } from 'react';
import "../../styles/Gallery.css";
import Title from './Title';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { projectStorage, projectFirestore } from "../../firebase/config";

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedImgID, setselectedImgID] = useState('');

    const imageRemove = () => {
        const imgRef = projectStorage.refFromURL(selectedImg);
        imgRef.delete()
          .then(res => toast("Image Deleted!"))
          .catch(err => toast("Error in Deleting Image!"));
        
        projectFirestore.collection("images").doc(selectedImgID).delete().then(function () {
          toast("Image URL Deleted!"); 
        }).catch(function (error) {
          toast("Erroe in Deleting Image!"); 
        });
        setSelectedImg(null);
      }

    return (
        <div>
            <Navbar />
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
            <div className="Gallery">
                <Title />
                {localStorage.getItem("isLogin") ? <UploadForm /> : null}
                <ImageGrid setSelectedImg={setSelectedImg} setselectedImgID={setselectedImgID} />
                {selectedImg && (
                    <Modal 
                        selectedImg={selectedImg} 
                        setSelectedImg={setSelectedImg} 
                        selectedImgID={selectedImgID} 
                        setselectedImgID={setselectedImgID}
                        imageRemove={imageRemove}
                    />
                )}
            </div>
            <Footer />
        </div>

    );
}

export default Gallery;
