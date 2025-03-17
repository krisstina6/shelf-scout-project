import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../services/getBookById";
import Navbar from "../../components/Navbar/Navbar";
import Spinner from "../../components/Spinner/Spinner";
import { handleDuplicates } from "../../utils/bookHelper";

export const VIEWED_BOOKS = "viewedBooks";

const BookDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, isLoading } = useGetBookByIdQuery({ id });

  const handleBackHomeNavigation = () => navigate(-1);

  const viewedBooks = JSON.parse(sessionStorage.getItem(VIEWED_BOOKS)) || [];
  const updatedViews = [...viewedBooks, data];
  const newSearched = updatedViews
    .flat()
    .filter((searches) => searches && typeof searches === "object");
  const updatedSearched = [...newSearched, data];
  const booksWithoutDuplicates = handleDuplicates(updatedSearched);
  sessionStorage.setItem(VIEWED_BOOKS, JSON.stringify(booksWithoutDuplicates));

  return (
    <>
      <Navbar />
      {!isLoading ? (
        <div className="h-1vh px-10 py-5 bg-[rgb(247,248,355)]">
          <button
            onClick={() => handleBackHomeNavigation()}
            className="mt-5 text-white bg-[rgb(113,78,74)] text-l cursor-pointer transition-[0.3sease-in-out] p-4 rounded-2 border-[none]"
          >
            Back to home
          </button>
          <div className="pt-10 gap-10 flex flex-wrap ">
            <img src={data?.imageCover} alt="image-cover" />
            <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_2px_5px_0px,rgba(0,0,0,0.06)_0px_2px_4px_0px] p-10 w-2/3">
              <h2 className="text-3xl pb-3 font-bold">{data?.title}</h2>
              <div className="">
                <span className="text-xl font-bold p-2">Author/s: </span>
                <span>{data?.authorsNames}</span>
              </div>
              <div className="p-2">
                <span className="text-xl font-bold ">Created: </span>
                <span>{data?.created?.value}</span>
              </div>
              <div className="p-2">
                <span className="text-xl font-bold "> Last modified:: </span>
                <span> {data?.last_modified?.value}</span>
              </div>
              {data?.description ? (
                <div className="p-2">
                  <div className="text-xl font-bold pb-2">Description:</div>
                  <div>{data?.description?.value || data?.description}</div>
                </div>
              ) : (
                <div>There is no description for this book</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default BookDetails;
