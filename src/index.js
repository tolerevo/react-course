import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  function add(x, y) {
    return x + y;
  }

  return (
    <div>
      <h1>{add(20, 40)}</h1>
    </div>
  );
}

root.render(
  <>
    <Greeting />
    <Greeting />
    <Greeting />
  </>
);
