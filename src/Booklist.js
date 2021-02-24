import React from "react";

const listStyle = {
  backgroundColor: "red",
  color: "yellow",
  fontSize: "64px",
  textAlign: "center",
  display: "block",
};

export default function Booklist({ books }) {
  console.table(books);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ ...listStyle }}>
            {book.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
