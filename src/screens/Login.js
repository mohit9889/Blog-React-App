/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import "../styles/Login.css";
import "../styles/util.css";
import { auth } from "../firebase/config";
import Navbar from "../components/Navbar";
import LoaderSpinner from "../components/Loader";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState(false);
    const { history } = props;

    const signIn = async (event) => {
        event.preventDefault();
        
        setloading(true);

        await auth.signInWithEmailAndPassword(email, password)
            .then((res) => {
                localStorage.setItem("isLogin", true);
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
            });

        if (localStorage.getItem("isLogin")) {
            setloading(false);
            history.push("/Admin");
        }

    }



    return (
            <div>
                <Navbar />
                <LoaderSpinner visible={loading}></LoaderSpinner>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form validate-form">
                                <span className="login100-form-title p-b-34">
                                    Admin Login Only
					</span>

                                <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
                                    <input
                                        id="first-name"
                                        className="input100"
                                        type="text"
                                        name="username"
                                        placeholder="User name"
                                        defaultValue={email}
                                        onChange={(event) => { setEmail(event.target.value) }}
                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
                                    <input
                                        className="input100"
                                        type="password"
                                        name="pass"
                                        placeholder="Password"
                                        defaultValue={password}
                                        onChange={(event) => { setPassword(event.target.value) }}
                                    />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <button onClick={signIn} className="login100-form-btn">
                                        Sign in
                                </button>
                                </div>

                                <div className="w-full text-center p-t-27 p-b-239">
                                    <span className="txt1">
                                        Forgot
						</span>

                                    <a href="#" className="txt2">
                                        Password?
						</a>
                                </div>

                            </form>

                            <div className="login100-more"></div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Login;
