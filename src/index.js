import React from "react";
import ReactDOM from "react-dom";

const link = React.createElement(
  "a",
  { href: "http://www.google.com" },
  "Посилання на гугл"
);

const header = React.createElement("h1", {}, "Заголовок сайту");

const headerTwo = React.createElement("h2", {}, "заголовок номер два");

const block = React.createElement("div", null, header, headerTwo, link);

ReactDOM.render(block, document.getElementById("root"));

// домашнє завдання
// створити елемент nav всередині якого буде список ul з чотирма елементами li
