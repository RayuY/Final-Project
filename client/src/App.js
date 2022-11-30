import "./App.css";
import { Navbar, ScrollButton, Owner, Homepage, User, AboutUs } from "./components";
import { Footer } from "./container";
import { BrowserRouter as Router, Route, Routes, Link, Redirect, } from "react-router-dom";

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

        </Routes>

        <Footer />
      </Router>
      
      <ScrollButton />
    </div>
  );
}

export default App;
