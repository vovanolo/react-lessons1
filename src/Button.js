import React from "react";

export default function Button({ onStateChange }) {
  return (
    <div>
      <button onClick={onStateChange}>click</button>
    </div>
  );
}
