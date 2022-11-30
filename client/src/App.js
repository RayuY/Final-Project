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

import ScrollButton from "./components/ScrollButton/ScrollButton";
import Owner from "./components/Owner/Owner";
import Homepage from "./components/Homepage/Homepage";
import User from "./components/User/User";
import AboutUs from "./components/AboutUs/AboutUs";
import { IdContext } from "./IdContext";
import Restaurant from "./components/Restaurant/Restaurant";
import OwnerReservation from "./components/OwnerReservation/OwnerReservation";

function App() {
  return (
    <div>
      <Router>
        <IdContext.Provider value="this is the Id">
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Homepage />} />

            <Route exact path="/restaurants/:id" element={<Restaurant />} />

            <Route exact path="/owners" element={<Owner />} />

            <Route exact path="/owners/:id" element={<Owner />} />

            <Route exact path="/user" element={<User />} />

            <Route exact path="/reservations/:id" element={<OwnerReservation />}/>

            <Route exact path="/about" element={<AboutUs />} />
          </Routes>

          <Footer />
        </IdContext.Provider>
      </Router>

      <ScrollButton />
    </div>
  );
}

export default App;
