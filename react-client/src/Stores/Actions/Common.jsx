import * as actionTypes from '../actions'

export const setCountries = (countries) => {
	return {
		type: actionTypes.SET_COUNTRIES,
		payload: countries
	}
}
