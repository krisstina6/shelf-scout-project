import { useCallback, useEffect, useState } from "react";
import { useLazyGetBooksQuery } from "../services/getBooks";
import useDebounce from "./useDebounce";

const useSearchedBooks = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [getBooks, { data: books, isLoading, error }] = useLazyGetBooksQuery();
  const { debouncedValue, setDebouncedValue } = useDebounce("");

  const handleButtonSearched = useCallback(() => {
    setIsButtonClicked(!isButtonClicked);
  }, [isButtonClicked]);

  useEffect(() => {
    if (isButtonClicked || (debouncedValue && debouncedValue !== "")) {
      getBooks({ searchTerm: debouncedValue });
    }
  }, [isButtonClicked, debouncedValue]);

  return {
    data: books,
    error,
    isLoading,
    setSearchTerm: setDebouncedValue,
    searchTerm: debouncedValue,
    handleButtonSearched,
  };
};

export default useSearchedBooks;
