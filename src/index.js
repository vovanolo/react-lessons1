import React from "react";
import ReactDOM from "react-dom";

const link = React.createElement(
  "a",
  {
    href: "http://www.google.com",
    target: "_blank",
  },
  "Посилання на google"
);

ReactDOM.render(link, document.getElementById("root"));

// Домашнє!!!!
// створити блок div з наповнення, створити img зі всіма властивостями, та тег h1
