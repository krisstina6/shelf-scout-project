import { combineReducers, configureStore } from "@reduxjs/toolkit/react";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getBooksApi } from "../services/getBooks";
import { getBookByIdApi } from "../services/getBookById";

const rootReducer = combineReducers({
  [getBooksApi.reducerPath]: getBooksApi.reducer,
  [getBookByIdApi.reducerPath]: getBookByIdApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(getBooksApi.middleware)
      .concat(getBookByIdApi.middleware),
});

setupListeners(store.dispatch);
