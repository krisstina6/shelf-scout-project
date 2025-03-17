import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { handleDuplicates } from "../utils/bookHelper";

export const SEARCHED_BOOKS = "searchedBooks";

const useSelectedBook = ({ data }) => {
  const navigate = useNavigate();

  const handleBookNavigation = useCallback(
    (bookId) => {
      navigate(`/book/${bookId}`);
      const searchedBooks =
        JSON.parse(sessionStorage.getItem(SEARCHED_BOOKS)) || [];
      const updatedSearch = [...searchedBooks, data];
      const newSearched = updatedSearch
        .flat()
        .filter((searches) => searches && typeof searches === "object");
      const handleDataType = typeof data === "object" ? data : { ...data };
      const addToSearched = [...newSearched, handleDataType];
      const booksWithoutDuplicates = handleDuplicates(addToSearched);
      sessionStorage.setItem(
        SEARCHED_BOOKS,
        JSON.stringify(booksWithoutDuplicates)
      );
    },
    [data]
  );

  return {
    handleBookNavigation,
  };
};

export default useSelectedBook;
