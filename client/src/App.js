import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Navbar } from "./components";
import { Footer } from "./container";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect,
} from "react-router-dom";

import ScrollButton from "./components/ScrollButton/ScrollButton"
import Owner from "./components/Owner/Owner";
import Homepage from "./components/Homepage/Homepage";
import User from "./components/User/User";
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/owner" element={<Owner />} />
            <Route exact path="/user" element={<User />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </Router>
      
      <ScrollButton />
    </div>
  );
}

export default App;
