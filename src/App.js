import React, { useState, useEffect } from "react";
import ErrorMessage from "./components/ErrorMessage";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 border-solid h-12 w-12"></div>
    </div>
  );
};

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/books");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl xl:text-4xl text-center my-10">My Favorite Books</h1>
        {loading && <Spinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && <BookList books={books} />}
      </div>
    </>
  );
};

export default App;
