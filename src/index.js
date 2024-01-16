import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import Button from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33, 3, 2, 2]}
      address={{ street: "123 Main Street", city: "NewYork" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <UserCard
      name="Joe Mcmillan"
      amount={2300}
      married={false}
      points={[99, 33, 3, 2, 2]}
      address={{ street: "123 Main Street", city: "NewJersey" }}
    /> */}
    <Button />
  </>,
);
