import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import bookSearchReducer from "./reducers/book-search-reducer";

export const store = createStore(bookSearchReducer, applyMiddleware(thunk));