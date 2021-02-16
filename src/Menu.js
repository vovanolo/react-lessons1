import React from "react";
import ListELement from "./ListElement";

export default function Menu({ firsList, secondList, thirdList }) {
  return (
    <nav>
      <ul>
        <ListELement value={firsList} />
        <ListELement value={secondList} />
        <ListELement value={thirdList} />
      </ul>
    </nav>
  );
}
