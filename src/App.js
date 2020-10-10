import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

// Users Screens
import Home from "./screens/Home/Home";
import Blog from "./screens/Blog/Blog";
import Gallery from "./screens/gallery/Gallery";
import About from "./screens/About";
import Login from "./screens/Login";
import ReadBlogPage from "./screens/ReadBlogPage";
// Admin Screens
import Admin from "./screens/Admin/Admin";
import AddBlog from "./screens/Admin/AddBlog";
import EditBlog from "./screens/Admin/EditBlog";
import Blogs from "./screens/Admin/Blogs";
// Page not Found
import PageNotFound from "./screens/404Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Blog" exact component={Blog} />
          <Route path="/Blog/:id" exact component={ReadBlogPage} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/About" component={About} />
          <Route path="/Login" component={Login} />
          <PrivateRoute exact path="/Admin" component={Admin} />
          <PrivateRoute exact path="/Admin/allblogs" component={Blogs} />
          <PrivateRoute exact path="/Admin/addblogs" component={AddBlog} />
          <PrivateRoute exact path="/Admin/editblog" component={EditBlog} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
