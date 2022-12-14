import "./App.css";
import { Navbar, ScrollButton, Owner, Homepage, User, AboutUs, Login, Register } from "./components";
import { Footer } from "./container";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UserContext } from './UserContext';
import { useMemo, useState } from "react";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {

  const [user, setUser] = useState('Guest');
  const role = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div>

      <UserContext.Provider value={role}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/restaurants/:id" element={<Restaurant />} />
            <Route exact path="/owners/:id" element={<Owner />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reservations/:id" element={<User />} />
          </Routes>

          <Footer />
        </Router>

        <ScrollButton />
      </UserContext.Provider>
    </div>
  );
}

export default App;
