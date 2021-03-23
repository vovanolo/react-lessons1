import React from "react";

export default function Navbar({ name, year, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{year}</p>
      <b>{description}</b>
    </div>
  );
}
