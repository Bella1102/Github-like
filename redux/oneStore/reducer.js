import * as constants from './constants';


const defaultState = {
	loginStatus: false,
	count: 0,
	username: 'bella'
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.ADD:
			return { count: state.count + (action.num || 1) }
		case constants.UPDATE_USERNAME:
			return {...state, username: action.name }

		default:
			return state;
	}
};