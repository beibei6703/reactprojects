import Detail from './component'
import * as actionCreators from "./store/actionCreator"
import { connect } from 'react-redux' 
const mapState =(state) => ({
	title:state.detail.title,
	date:state.detail.date,
	content:state.detail.content
})
const mapDispatch =(dispatch) =>({
	
	getList(id){
		const action = actionCreators.getList(id)
		dispatch(action)
	}
})
export default connect(mapState,mapDispatch)(Detail)