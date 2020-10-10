/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Tabbar = ({ setaddBlog }) => {
    return (
        
        <ul className="tabbar nav justify-content-center">
            <li className={ "nav-item" }>
                <a onClick={() => setaddBlog(false)} href="#">All Blogs</a>
            </li>
            <li className={"nav-item" }>
                <a onClick={() => setaddBlog(true)} href="#">Add Blogs</a>
            </li>
        </ul>
    );
}

export default Tabbar;
