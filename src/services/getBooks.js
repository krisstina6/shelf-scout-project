import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { removeNullItems } from "../utils/bookHelper";

export const getBooksApi = createApi({
  reducerPath: "getBooksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org/",
  }),
  endpoints: (build) => ({
    getBooks: build.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const { searchTerm } = _arg;
        const { data: books } = await fetchWithBQ(
          `search.json?title=${searchTerm}`
        );
        if (books.error) return { error: books.error };
        const booksWithImages = await Promise.all(
          books?.docs?.map(async (book) => {
            if (!book?.cover_i) return null;
            return {
              ...book,
              imageCover: `https://covers.openlibrary.org/b/id/${book?.cover_i}-L.jpg`,
            };
          })
        );
        return { data: removeNullItems(booksWithImages) };
      },
    }),
  }),
});

export const { useGetBooksQuery, useLazyGetBooksQuery } = getBooksApi;
