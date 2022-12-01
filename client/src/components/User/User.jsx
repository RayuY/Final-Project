import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./User.css";
import { images } from "../../constants";
import UserReservation from "../UserReservation/UserReservation";
import UserRestaurantInfo from "../UserRestaurantInfo/UserRestaurantInfo";

const User = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { id } = useParams();
  const userId = Number(id);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
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
    <div className="owner_page">
      <div className="owner_page_top_split">
        <div className="owner_page_top">
          <h3>Welcome </h3>
          <h1>{user.name}</h1>
          <div className="owner_page_spoon">
            <img
              src={images.spoon}
              className="spoon__img"
              style={{ marginTop: 15, transform: "rotate(180deg)" }}
            />
            <img
              src={images.spoon}
              className="spoon__img"
              style={{ marginTop: 15 }}
            />
          </div>
        </div>
        <div className="owner_page_add"></div>
      </div>

      <div className="owner_page_restaurant">
        {/* <UserReservation /> */}
        <UserRestaurantInfo />
      </div>

      <div className="owner_bottom_links">
        <button className="custom__button">View reservation</button>

        <Link to={"/"}>
          <button className="custom__button">Back to main page</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
