import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';

function App() {

  const [state, setState] = useState([]);
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/users')
      .then((res) => {
        setState(res.data.users)
      })
      .catch(e => console.error(`Error: ${e}`));
  }, [])

  useEffect(() => {
    axios.get('http://localhost:8000/owners')
      .then((res) => {
        setOwners(res.data.owners)
      })
      .catch(e => console.error(`Error: ${e}`));
  }, [])


  const arr = [];
  for (let user of state) {
    arr.push(<h1>User ID: {user.id} User Email: {user.email} User Pass: {user.password}</h1>)
  }

  const arr2 = [];
  for (let owner of owners) {
    arr2.push(<h1>Owner ID: {owner.id} Owner Email: {owner.owner_email} Owner Pass: {owner.owner_password}</h1>)
  }


  return (
    <div className="App">
      {arr}
      {arr2}      
    </div>
  );
}

export default App;
