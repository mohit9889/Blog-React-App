/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from "../firebase/config";
import "../styles/Style.css"

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isActive, setIsActive] = useState('home');
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("isLogin")) {
            setIsLogin(true);
        }
    }, [])

    const logout = () => {
        auth.signOut().then(function () {
            localStorage.clear();
            history.replace("/");
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">Blog .</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link to={"/"} className={isActive === "home" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => setIsActive("home")}>Home</Link>
                    <Link to={"/Blog"} className={isActive === "blog" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => setIsActive("blog")}>Blog</Link>
                    <Link to={"/Gallery"} className={isActive === "gallery" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => setIsActive("gallery")}>Gallery</Link>
                    <Link to={"/About"} className={isActive === "about" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => setIsActive("about")}>About</Link>
                    {
                        (isLogin) ? (
                            <Link to={"/Admin"} className={isActive === "admin" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={() => setIsActive("admin")}>Admin</Link>
                        ) : null
                    }
                    {
                        (isLogin) ? (
                            <button onClick={logout} className="btn btn-outline-danger my-2 my-sm-0" type="submit">
                                Log Out
                            </button>
                        ) : (
                                <Link to={"/Login"}>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                        SignIn
                                    </button>
                                </Link>
                            )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
