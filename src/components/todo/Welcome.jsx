import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Welcome = () => {
  const { username } = useParams();

  return (
    <div className="welcome">
      <h1>Welcome, {username}</h1>
      <div>
        Manage your todos, <Link to="/todos">Here</Link>
      </div>
    </div>
  );
};

export default Welcome;
