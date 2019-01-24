import * as actionTypes from '../actions'

const initialState = {
	countries: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.SET_COUNTRIES:
			return {
				...state,
				user: action.payload
			}
		default:
			return state
	}
}

export default reducer