import "./App.css";
import { Navbar, ScrollButton, Owner, Homepage, User, AboutUs, Login, Register } from "./components";
import { Footer } from "./container";

import { BrowserRouter as Router, Route, Routes, Link, Redirect, } from "react-router-dom";

import { UserContext } from './UserContext';
import { useMemo, useState } from "react";
import Restaurant from "./components/Restaurant/Restaurant";
import OwnerReservation from "./components/OwnerReservation/OwnerReservation";

function App() {

  const [user, setUser] = useState('Guest');
  const role = useMemo(() => ({ user, setUser }), [user, setUser]);

  const userObj = {
    id: 1,
    name: 'Matt Wilson',
    phone: '778'
  }

  return (
    <div>

      <UserContext.Provider value={role}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage userObj={userObj} />} />
            <Route exact path="/restaurants/:id" element={<Restaurant userObj={userObj} />} />
            <Route exact path="/owners/:id" element={<Owner userObj={userObj} />} />
            {/* <Route exact path="/users/:id" element={<User />} /> */}
            <Route exact path="/about" element={<AboutUs userObj={userObj} />} />
            <Route exact path="/login" element={<Login userObj={userObj} />} />
            <Route exact path="/register" element={<Register userObj={userObj} />} />
            <Route exact path="/reservations/:id" element={<OwnerReservation userObj={userObj} />} />
          </Routes>

          <Footer />
        </Router>

        <ScrollButton />
      </UserContext.Provider>
    </div>
  );
}

export default App;
