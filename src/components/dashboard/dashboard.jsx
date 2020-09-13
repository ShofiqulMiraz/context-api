import React, { useContext } from "react";

import { MovieContext } from "../moviecontext/movieContext";

const DashBoard = () => {
  const { isLoggedInStatus } = useContext(MovieContext);
  const [isLoggedIn] = isLoggedInStatus;
  return (
    <div>{isLoggedIn ? <h1>you are logged in</h1> : <h1>please login</h1>}</div>
  );
};

export default DashBoard;
