import React from "react";

const BookCard = ({ data, getBookId, handleBookNavigation }) => {
  return (
    <div className="grid grid-cols-3 mx-0 my-5 gap-5">
      {data?.map(
        ({
          title,
          key,
          author_name,
          first_publish_year,
          imageCover,
          covers,
          authorsNames,
          publishedYear,
        }) => {
          const imageCoverViewed =
            covers && `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`;
          const bookId = getBookId(key);
          const authors = author_name?.map((authors) => authors).join(", ");
          return (
            <div
              key={key}
              className="flex items-left w-[400px] shadow-[rgba(0,0,0,0.1)_0px_3px_6px_0px,rgba(0,0,0,0.06)_0px_3px_6px_0px] text-black bg-white gap-5 h-full p-5 rounded-md"
            >
              <img
                className="w-[180px] max-h-[300px]"
                src={imageCover || imageCoverViewed}
                alt="image-cover"
              />
              <div>
                <p className="text-2xl pb-5 font-bold">{title}</p>
                <div>
                  <p className="text-l font-bold">Author/s: </p>
                  <p>{authors || authorsNames}</p>
                </div>
                <div>
                  <p className="pt-3 text-l font-bold">First published: </p>
                  <p>{first_publish_year || publishedYear}</p>
                </div>
                <button
                  className="bg-[rgb(113,78,74)] mt-5 text-white p-2 cursor-pointer transition-[0.3sease-in-out] rounded-md border-[none]"
                  onClick={() => handleBookNavigation(bookId)}
                >
                  More info
                </button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default BookCard;
