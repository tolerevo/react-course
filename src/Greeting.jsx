import React from "react";

export function Greeting() {
  return <h1>Componente de React</h1>;
}

export function UserCard({ name, amount, married, points }) {
  return<>
  <h1>User Card</h1>
  <h2 style={{textTransform: "uppercase", fontStyle: "italic"}}>{name}</h2>
  <ul style={{listStyle: "inside"}}>
    <li>{amount}$</li>
    <li>{points}</li>

  </ul>
  </> 
}
