import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import bookSearchReducer from "./reducers/book-search-reducer";

export const store = createStore(
	bookSearchReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

window.store = store;