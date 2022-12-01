
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './User.css';
import { images } from '../../constants';
import UserReservation from '../UserReservation/UserReservation';

const User = () => {


  const [userInfo, setUserInfo] = useState
    ([]);
  const { id } = useParams();
  const userId = Number(id);


  useEffect(() => {
    axios
      .get('http://localhost:8000/users')
      .then((res) => {
        setUserInfo(res.data.users);
        console.log(res.data.users);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const user = userInfo.find((i) => i.id === userId);

  if (userInfo.length === 0) {
    return null;
  }

  console.log(user);

  return (
    <div className='outerDiv'>
      <span className='thankUser'>
        <h3>Thank you,</h3>
        <h3>{user.name}</h3>
      </span>
      {/* <UserReservation /> */}
    </div>
  );

};

export default User;
