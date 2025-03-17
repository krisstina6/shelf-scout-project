import React from "react";
import BookCard from "../BookCard/BookCard";
import { getBookId } from "../../utils/bookHelper";

const ViewedBooks = ({ viewedBooks, handleBookNavigation }) => {
  return (
    viewedBooks && (
      <div className="mx-20">
        <div className="text-2xl">Previously viewed books:</div>
        <BookCard
          data={viewedBooks}
          getBookId={getBookId}
          handleBookNavigation={handleBookNavigation}
        />
      </div>
    )
  );
};

export default ViewedBooks;
