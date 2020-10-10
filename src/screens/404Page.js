import React from "react";
import "../styles/404Page.css"
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <Link to={"/"}>Go TO Homepage</Link>
            </div>
        </div>
    )
}

export default PageNotFound; 