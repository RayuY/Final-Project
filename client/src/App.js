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

import Owner from "./components/Owner/Owner";
import Homepage from "./components/Homepage/Homepage";
import User from "./components/User/User";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>

          <Route exact path="/" element={<Homepage />} />

          <Route exact path="/owner" element={<Owner />} />

          <Route exact path="/user" element={<User />} />
        
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
