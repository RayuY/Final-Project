import "./App.css";
import { Navbar, ScrollButton, Owner, Homepage, User, AboutUs } from "./components";
import { Footer } from "./container";
import { BrowserRouter as Router, Route, Routes, Link, Redirect, } from "react-router-dom";

import { UserContext } from './UserContext'
import { useMemo, useState } from "react";

function App() {

  const [user, setUser] = useState('Guest');
  const role = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <div>
      <UserContext.Provider value={role}>
        <Router>
          <Navbar />


          <Routes>
            <Route exact path="/" element={<Homepage />} />

            <Route exact path="/owner" element={<Owner />} />

            <Route exact path="/user" element={<User />} />

            <Route exact path="/about" element={<AboutUs />} />

          </Routes>

          <Footer />
        </Router>

        <ScrollButton />
      </UserContext.Provider>
    </div>
  );
}

export default App;
