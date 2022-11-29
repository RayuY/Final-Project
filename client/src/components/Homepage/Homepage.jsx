import React from "react";

import { images } from "../../constants";

const Homepage = () => {
  return (
    <h1 className='app__navbar'>
      <img src={images.gallery01} alt="app logo" />
      <img src={images.gallery02} alt="app logo" />
      <img src={images.gallery03} alt="app logo" />
      <img src={images.gallery04} alt="app logo" />
    </h1>
  );
};

export default Homepage;
