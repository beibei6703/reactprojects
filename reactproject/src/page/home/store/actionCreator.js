import * as actionTypes from './actionType'
export const changeitem = (value)=>({
	type:actionTypes.CHANGE_ITEM,
	data:value

}) 
export const homeItem = ()=>{
	return (dispatch)=>{
		fetch("/api/home.json")
		.then(res => res.json())
		.then( res => {
			if(res && res.ret && res.data){
				const action = changeitem(res.data.list)
				dispatch (action)
				
			}
		})

	}
}