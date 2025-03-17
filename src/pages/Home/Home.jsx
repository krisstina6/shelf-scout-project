import React from "react";
import Header from "../../components/Header/Header";
import BookList from "../../components/BookList/BookList";
import useSearchedBooks from "../../hooks/useSearchedBooks";
import ViewedBooks from "../../components/ViewedBooks/ViewedBooks";
import Navbar from "../../components/Navbar/Navbar";
import useSelectedBook from "../../hooks/useSelectedBook";
import { VIEWED_BOOKS } from "../BookDetails/BookDetails";

const Home = () => {
  const { data, isLoading, setSearchTerm, searchTerm, handleButtonSearched } =
    useSearchedBooks();
  const viewedBooks = JSON.parse(sessionStorage.getItem(VIEWED_BOOKS));
  const { handleBookNavigation } = useSelectedBook({ data });

  return (
    <>
      <Navbar />
      <Header
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        handleButtonSearched={handleButtonSearched}
      />
      <BookList
        isLoading={isLoading}
        data={data}
        searchTerm={searchTerm}
        handleBookNavigation={handleBookNavigation}
      />
      <ViewedBooks
        viewedBooks={viewedBooks}
        handleBookNavigation={handleBookNavigation}
      />
    </>
  );
};

export default Home;
