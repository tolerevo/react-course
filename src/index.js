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

root.render(
  <>
    <Post />
  </>
);
