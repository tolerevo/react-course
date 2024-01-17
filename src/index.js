import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line
import { Greeting, UserCard } from "./Greeting";
// eslint-disable-next-line
import Product, { NavBar } from "./Product";
// eslint-disable-next-line
import Button from "./Button";
// eslint-disable-next-line
import { TaskCard } from "./Task";
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Ryan ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Ryan Roberts",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Ryan Gosling",
    image: "https://robohash.org/user3",
  },
  ,
];

root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>,
);
