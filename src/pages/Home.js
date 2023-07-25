import React from "react";
import Layouts from "../components-layout/Layouts";
import { Link } from "react-router-dom";
import Banner from '../images/banner.jpeg'

const Home = () => {
  return (
    <Layouts>
     
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headercontainer">
          <h1>Food Website</h1>
          <p>Best Food In Pakistan</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layouts>
  );
};

export default Home;
