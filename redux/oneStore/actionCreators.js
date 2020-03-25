import axios from 'axios';
import * as constants from './constants';


// const baseURL = 'http://127.0.0.1:5000'

// const getConfig = {
// 	headers: { "accept": "application/json" }
// };
// const postConfig = {
// 	headers: {
// 		"accept": "application/json",
// 		'Content-Type':'application/json'
// 	}
// };

export const logout = () => ({
	type: constants.LOGOUT,
	loginStatus: false
});

export function add(num){
    return {
        type: constants.ADD,
        num,
    }
};

function addAsync(num) {
    return dispatch => {
        setTimeout(() => { dispatch(add(num)) }, 1000)
    }
}

export function rename(name){
    return {
        type: constants.UPDATE_USERNAME,
        name,
    }
};



