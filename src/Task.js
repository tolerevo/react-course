import React from "react";
import "./task.css";

export function TaskCard({ ready }) {
  return (
    <div className={ready === true ? 'bg-true' : 'bg-false'}>
      <h1 style={{ fontWeight: "lighter" }}>Mi primer Tarea</h1>
      <span
        style={
          ready
            ? { fontFamily: "arial, sans-serif", backgroundColor: "blueviolet" }
            : { fontFamily: "cursive" }
        }
      >
        {ready === true ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
