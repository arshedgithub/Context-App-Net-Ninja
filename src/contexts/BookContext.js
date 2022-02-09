import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Name of the wind", id: 1 },
    { title: "The way of King", id: 2 },
    { title: "The final Empire", id: 3 },
    { title: "The hero of ages", id: 4 },
  ]);
  return (
    <BookContext.Provider values={{ ...books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
