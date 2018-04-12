import { combineReducers } from 'redux'
import { reducer as headerReducer} from '../components/header/'
import { reducer as homeReducer} from '../page/home/'
import { reducer as detailReducer} from '../page/detail/'
const reducer = combineReducers({
	header: headerReducer,
	home:homeReducer,
	detail:detailReducer

})
export default reducer