import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./User.css";
import UserReservation from "../UserReservation/UserReservation";

const User = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { id } = useParams();
  const userId = Number(id);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        setUserInfo(res.data.users);
      })
      .catch((e) => console.error(`Error: ${e}`));
  }, []);

  const user = userInfo.find((i) => i.id === userId);

  if (userInfo.length === 0) {
    return null;
  }

  return (
    <div className="owner_page">
      <div className="owner_page_top_split">
        <div className="owner_page_top">
          <div className="owner_page_spoon">
          </div>
        </div>
        <div className="owner_page_add"></div>
      </div>

      <div className="owner_page_restaurant">
        <UserReservation />
      </div>

    </div>
  );
};

export default User;
