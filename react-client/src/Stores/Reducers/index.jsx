import { combineReducers } from 'redux'

import authReducer from './Auth'
import commonReducer from './Common'

const rootReducer = combineReducers({
	authReducer,
	commonReducer
})

export default rootReducer