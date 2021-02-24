import React from "react";

export default function Section({ name, children }) {
  return (
    <div>
      <h1>{name}</h1>
      {children}
    </div>
  );
}
