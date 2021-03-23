import React from "react";
import Navbar from "./Navbar";
import Counter from "./Counter";
export default function App() {
  return (
    <div>
      Hello app
      <Navbar name="navbar component" year={2021} description="safasfasfas" />
      <Counter initialValue={20} />
    </div>
  );
}

// зробити та застилізувати компонент каунтер
