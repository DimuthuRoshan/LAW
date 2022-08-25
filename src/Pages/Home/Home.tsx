import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  let location:any = useLocation();
  return <div>Welcome {location.state.user.name}</div>;
};

export default Home;
