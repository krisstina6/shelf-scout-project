import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { handleDateAndTime } from "../utils/bookHelper";
import { SEARCHED_BOOKS } from "../hooks/useSelectedBook";

export const getBookByIdApi = createApi({
  reducerPath: "getBookByIdApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org/",
  }),
  endpoints: (build) => ({
    getBookById: build.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const { id } = _arg;
        const { data: book } = await fetchWithBQ(`works/${id}.json`);
        if (book.error) return { error: book.error };

        const bookAuthors = await Promise.all(
          book?.authors?.map(async ({ author }) => {
            const { data } = await fetchWithBQ(`${author.key}.json`);
            return data?.name;
          })
        );
        const authorsNames = bookAuthors?.map((authors) => authors).join(", ");
        const searchedBooks = JSON.parse(
          sessionStorage.getItem(SEARCHED_BOOKS)
        );
        const searchedBooksImage = searchedBooks?.find(
          (searchedBook) => searchedBook?.key === book?.key
        );
        const imageCoverId = book?.covers
          ? book?.covers[0]
          : searchedBooksImage?.cover_i;

        return {
          data: {
            ...book,
            authorsNames,
            imageCover: `https://covers.openlibrary.org/b/id/${imageCoverId}-L.jpg`,
            created: {
              ...book?.created,
              value: handleDateAndTime(book?.created?.value),
            },
            last_modified: {
              ...book?.last_modified,
              value: handleDateAndTime(book?.last_modified?.value),
            },
            publishedYear:
              book?.first_publish_year ||
              searchedBooksImage?.first_publish_year,
          },
        };
      },
    }),
  }),
});

export const { useGetBookByIdQuery, useLazyGetBookByIdQuery } = getBookByIdApi;
