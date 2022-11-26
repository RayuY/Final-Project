import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';

function App() {

  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/users')
      .then((res) => {
        setState(res.data.users)
      })
      .catch(e => console.error(`Error: ${e}`));
  }, [])

  const arr = [];
  for (let user of state) {
    arr.push(<h1>User ID: {user.id} User Email: {user.email} User Pass: {user.password}</h1>)
  }
  return (
    <div className="App">
      {arr}      
    </div>
  );
}

export default App;
