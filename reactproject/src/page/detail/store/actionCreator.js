import * as actionTypes from './actionType'
export const changedetail = ( data )=>({

	type:actionTypes.CHANGE_DETAIL,
	value:{
		title:data.title,
		date:data.date,
		content:data.content
	}

})
export const getList = (id)=>{
	return (dispatch)=>{
		fetch('/api/detail.json?id='+id)
		.then(res => res.json())
		.then(res => {
			if(res && res.ret && res.data){
				const action = changedetail(res.data)
				dispatch(action)
	
				
			}
		})

	}
}
