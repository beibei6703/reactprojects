import * as actionTypes from './actionType'
export const changelist = (data) => ({
	type :actionTypes.CHANGE_LIST,
	value:data
})
export const openModal = () => ({
	type:actionTypes.OPEN_MODAL
})
export const hideModal = () =>({
	type:actionTypes.HIDE_MODAL
})
export const login =()=>({
	type:actionTypes.LOGIN
})
export const logout =() =>({
	type:actionTypes.LOGOUT
})
export const getList =() =>{
	return (dispatch)=>{
		fetch('/api/header.json')
		.then(res => res.json())
		.then(res => {
			console.log(res)
			if(res && res.data &&res.ret){
				const action = changelist (res.data.list)
				dispatch(action)
				
			}
		})
	}
}
export const checkLogin=(userName,password)=>{
	return (dispatch)=>{
		fetch('/api/login.json?userName='+userName+'&password='+password)
		.then( res =>res.json() )
		.then( res => {
			if(res && res.ret && res.data){
				const action =login()
				dispatch(action)
				
			}
		})
	}
}
