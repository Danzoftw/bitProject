import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import CardHooks from "./CardHooks";
import AmazonRegister from "./amazon/AmazonRegister";
import AmazonLogin from "./amazon/AmazonLogin";
import { Account } from "./amazon/Accounts";
import Parent from "./Group/MainParent";
// import Child from "./Group/MainParent";
import MyApi from "./components/MyApi";
import { About } from "./components/About";
// import ShippingList from "./addressbook/addressBook";
import { Link, Routes, Router, useParams, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { UserDetails } from "./components/UserDetails";
import { Users } from "./components/User";
import axios from 'axios';

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  let [items, setItems] = useState({});
  let { userId } = useParams();
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

 

  const logOut = () => {
    AuthService.logout();
  };
  return (
    <div>
      <Nav />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path="/creatures" element={<MyApi />} />
          <Route path="about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<Users />} />
          {/* <Route path="/users/" element={<UserDetails />} /> */}
          {/* <Route exact path="/users/:userId" element={<UserDetails />} /> */}
      </Routes>
      {/* <ShippingList /> */}
      {/* <Parent />  */}
      {/* <Account>
            <AmazonRegister />
            <AmazonLogin />
        </Account> */}
       {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          bezKoder
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          {showModeratorBoard && (
            <li className="nav-item">
              <Link to="/mod" className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}
          {showAdminBoard && (
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin Board
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
      <div className="container mt-3">
        <div>
          <h1>AWS Cognito</h1>
          
        </div>
        <Routes>
        
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            exact
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/user"
            element={<BoardUser />}
          />
          <Route
            path="/mod"
            element={<BoardModerator />}
          />
          <Route
            path="/admin"
            element={<BoardAdmin />}
          />
        </Routes>
      </div> */}
    </div>
  );
};
export default App;