import React from "react";
import { useParams } from "react-router";

const Welcome = () => {
  const { username } = useParams();

  return (
    <div className="welcome">
      <h1>Welcome, {username}</h1>
    </div>
  );
};

export default Welcome;
