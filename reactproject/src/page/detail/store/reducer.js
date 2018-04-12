
import * as actionTypes from './actionType'
const defaultState = {
	title:'',
	date:'',
	content:'',
}
export default ( state = defaultState, action) => {

	switch (action.type) {
		case actionTypes.CHANGE_DETAIL:
		return {
			...state,
			...action.value
		}
		default:
		return state

	}

}
