import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';

function App() {

  const [state, setState] = useState([]);
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/customers')
      .then((res) => {
        setState(res.data.customers);
      })
      .catch(e => console.error(`Error: ${e}`));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/owners')
      .then((res) => {
        setOwners(res.data.owners);
      })
      .catch(e => console.error(`Error: ${e}`));
  }, []);


  const arr = [];
  for (let customer of state) {
    arr.push(<h1>customer ID: {customer.id} customer Email: {customer.email} customer Pass: {customer.password}</h1>);
  }

  const arr2 = [];
  for (let owner of owners) {
    arr2.push(<h1>Owner ID: {owner.id} Owner Email: {owner.email} Owner Pass: {owner.password}</h1>);
  }


  return (
    <div className="App">
      {arr}
      {arr2}
    </div>
  );
}

export default App;
