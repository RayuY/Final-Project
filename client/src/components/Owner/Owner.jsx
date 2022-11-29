
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { images } from '../../constants'

const Owner = () => {
  
  const [state, setState] = useState([]);

  useEffect(() => {
    // axios.get(`http://localhost:8000/owners/:${id}`)
    axios.get(`http://localhost:8000/owners/1`)
      .then((res) => {
        setState(res.data.owners)
        console.log("--------------")
        console.log("res.data", res.data.owners)
        console.log("--------------")

      })
      .catch(e => console.error(`Error: ${e}`));
  }, [])

  const owner = state.map((element, index) => {
    return <h1 key={index}>{element.name}</h1>
  })

  // for (let test of state) {
  //   owner.push(<h1>{test.name}</h1>)
  // }

  // const arr = [];
  // for (let user of state) {
  //   arr.push(<h1>User ID: {user.id} User Email: {user.email} User Pass: {user.password}</h1>)
  // }


  return (
    <div>
      Hello {owner} yo!
      {/* <OwnerById /> */}
    </div>
  )

}

export default Owner;
