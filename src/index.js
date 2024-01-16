import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import Button from "./Button";
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <section>
      <TaskCard ready={true} />
      <br />
      <Button text="Send" name="mss" />
    </section>
    <hr />
    <section>
      <TaskCard ready={false} />
      <br />
      <Button text="Receive" />
      <input id="hola" on/>
    </section>
  </>,
);
