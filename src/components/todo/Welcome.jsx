import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  retrieveHelloWorldBean,
  retrivreHelloMessageWithName,
} from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";

const Welcome = () => {
  const username = useAuth().username;

  const [message, setMessage] = useState("");
  const token = useAuth().token;

  const callHelloWorld = () => {
    retrieveHelloWorldBean()
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("Well cleaned up"));
  };

  const callHelloWorldWithName = (name) => {
    retrivreHelloMessageWithName(name, token)
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("HAHA"));
  };

  const successfulResponse = (response) => {
    console.log(response);
    setMessage(response.data.message);
  };

  const errorResponse = (error) => {
    console.log(`${error} happened unfortunately!`);
  };

  return (
    <div className="welcome">
      <h1>Welcome, {username}</h1>
      <div>
        Manage your todos, <Link to="/todos">Here</Link>
      </div>
      <div>
        <button className="btn btn-success m-3" onClick={callHelloWorld}>
          Call Hello World
        </button>
        <br />
        <button
          className="btn btn-success m-3"
          onClick={() => callHelloWorldWithName(username, token)}
        >
          Call Hello World with Name
        </button>
        <div className="text-info">{message}</div>
      </div>
    </div>
  );
};

export default Welcome;
