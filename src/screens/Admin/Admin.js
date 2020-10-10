import React, {useState} from 'react';
import Navbar from "../../components/Navbar"
import Tabbar from "./Tabbar";
import "../../styles/Admin.css";
import AddBlog from "./AddBlog";
import AllBlog from "./Blogs";

const Admin = () => {
    const [addBlog, setaddBlog] = useState(false);
    
    return (
        <div>
            <Navbar />
            <Tabbar setaddBlog={setaddBlog} />
            {addBlog ? <AddBlog /> : <AllBlog />}
        </div>
    );
}

export default Admin;
