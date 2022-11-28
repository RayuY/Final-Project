import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import { Navbar } from './components';
import { Footer } from './container';

function App() {


  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
