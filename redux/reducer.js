import { combineReducers } from 'redux';
import { reducer as comboReducer } from './oneStore';



const reducer = combineReducers({
	combo: comboReducer
});

export default reducer;



