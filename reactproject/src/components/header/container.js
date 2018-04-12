import { connect } from 'react-redux'
import Header from './component'
import * as actionCreators from './store/actionCreator' 
const mapStateToProps = (state) => ({
	list:state.header.list,
	showModal: state.header.showModal,
	isLogin: state.header.isLogin
})
const mapDispatchToProps = (dispatch) => ({
	getList() {
		const action = actionCreators.getList()
		dispatch(action)
	},
	
	openModal(){
		const action = actionCreators.openModal()
		dispatch (action)
	},
	hideModal(){
		const action = actionCreators.hideModal()
		dispatch (action)
	},
	
	logout(){
		const action = actionCreators.logout()
		dispatch(action)
	},
	checkLogin(userName,password){
		const action = actionCreators.checkLogin(userName ,password)
		dispatch(action)
	}

}) 

export default connect(mapStateToProps,mapDispatchToProps)(Header)