import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line
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

function Counter() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={() => {
        alert('El mensaje es:' + mensaje)
      }}>Save</button>
    </div>
  );
}
root.render(<Counter />);
