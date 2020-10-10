import React from "react";
import Loader from 'react-loader-web'
import "../styles/Loader.css";

const LoaderSpinner = ({visible}) => {
    return (
        <Loader
            className="custom-loader"
            type="Square"
            color="#53CAFF"
            visible={visible}
        />
    );
}

export default LoaderSpinner;

