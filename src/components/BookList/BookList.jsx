import React from "react";
import { getBookId } from "../../utils/bookHelper";
import Spinner from "../Spinner/Spinner";
import BookCard from "../BookCard/BookCard";
import NoData from "../../assets/images/no-data.jpg";

const BookList = ({ data, isLoading, searchTerm, handleBookNavigation }) => {
  return (
    <div className="m-20">
      {isLoading ? (
        <div className="flex items-center w-full">
          <Spinner />
        </div>
      ) : data?.length > 0 ? (
        <div>
          <div className="text-xl">{data.length} results</div>
          <BookCard
            data={data}
            getBookId={getBookId}
            handleBookNavigation={handleBookNavigation}
          />
        </div>
      ) : searchTerm ? (
        <div className="m-auto flex flex-col items-center w-full">
          <img className="w-[400px] h-[400px]" src={NoData} alt="No results" />
          <div>Sorry, there is no book with the searched title</div>
        </div>
      ) : null}
    </div>
  );
};

export default BookList;
