
import { connect } from 'react-redux'
import Home from './component'
import * as actionCreators from './store/actionCreator'


const mapState = (state) =>({
	list:state.home.list
})
const mapDispatch = (dispatch)=>({
	changeItem (data) {
		const action = actionCreators.changeitem(data)
		dispatch (action)
	},
	homeItem() {
		const action = actionCreators.homeItem()
		dispatch(action)
	}


})
export default connect(mapState,mapDispatch)(Home)
