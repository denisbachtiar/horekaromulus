import * as actions from '../actions'

const initialState = {
	user: null
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actions.SET_USER:
			return {
				...state,
				user: action.payload
			}
		default:
			return state
	}
}

export default reducer