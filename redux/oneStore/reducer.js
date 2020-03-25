import * as constants from './constants';


const defaultState = {
	loginStatus: false,
};

export default (state = defaultState, action) => {
	switch(action.type) {
		// case constants.LOGOUT:
		// 	return state.set('loginStatus', action.loginStatus);

		default:
			return state;
	}
};