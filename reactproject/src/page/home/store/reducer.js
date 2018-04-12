
import * as actionTypes from './actionType'
const defaultState = {
	list:[]
}
export default (state= defaultState,action)=>{
	switch (action.type){
		case actionTypes.CHANGE_ITEM:
		return {
			...state,
			list: action.data
		}
		default :
		return state
	}

}