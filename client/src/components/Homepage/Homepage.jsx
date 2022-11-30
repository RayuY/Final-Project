import { useContext } from "react";

import { images } from "../../constants";
import './Homepage.css';

import { UserContext } from '../../UserContext';

const Homepage = () => {

  const {user, setUser} = useContext(UserContext)

  return (
    <div>
    <div className="homepage">
      <h1 className="content">{user}</h1>
      <img className="image" src={images.RestaurantHomepage} alt="Restaurant interior" />
    </div>

    </div>
  );
};

export default Homepage;
