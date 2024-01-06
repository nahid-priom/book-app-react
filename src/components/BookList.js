import React from "react";

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:mx-0 mx-4 gap-10">
      {books.map((book) => (
        <div key={book.id}>
          <img className="rounded-md" src={book.cover_image} alt={book.title} />
          <h3 className="text-base xl:text-lg text-gray-800 font-semibold text-center">{book.title}</h3>
          <p className="text-gray-500 text-xs text-center">{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
