import React from "react";

export default function Section({ name, children }) {
  return (
    <>
      <h1>{name}</h1>
      {children}
    </>
  );
}
