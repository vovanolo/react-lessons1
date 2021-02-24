import React from "react";
import Section from "./Section";
import Weather from "./Weather";
import Booklist from "./Booklist";

const favouriteBooks = [
  { id: 1, name: "Book1" },
  { id: 2, name: "Book2" },
  { id: 3, name: "Book3" },
  { id: 4, name: "Book4" },
  { id: 5, name: "Book5" },
];

export default function App() {
  return (
    <div>
      <h1>Sait dla pogody</h1>
      <Section name="Погода у львові">
        <Weather temperature={7} vologist="70%" />
      </Section>
      <Section name="Погода у Франківську">
        <Weather temperature={8} vologist="80%" />
      </Section>
      <Section name="Погода у Києві">
        <Weather temperature={9} vologist="90%" />
      </Section>

      <h2>Booklist</h2>
      <Booklist books={favouriteBooks} />
    </div>
  );
}

// Домашнє завдання https://github.com/goitacademy/react-homework/tree/master/homework-01/social-profile
// створити компонент Profile, підєднати його до App та за допогомю props передати дані в Profile та відобразити
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
