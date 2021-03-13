import React from "react";
import styles from "./Menu.module.css";

export default function Menu({ home, contacts, aboutUs, children }) {
  return (
    <div>
      <ul className={styles.list}>
        <li>{home}</li>
        <li>{contacts}</li>
        <li>{aboutUs}</li>
      </ul>
      {children}
    </div>
  );
}
