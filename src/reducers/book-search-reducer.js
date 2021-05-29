const SET_INPUT_VALUE = 'SET-INPUT-VALUE';

const initialState = {
	inputValue: ''
};

export default function bookSearchReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_INPUT_VALUE:
			return { ...state, ...payload }
		default: return state;
	}
}

export const setInputValue = inputValue => ({ type: SET_INPUT_VALUE, payload: { inputValue } })