import axios from 'axios';
import { fromJS } from 'immutable';
import {message} from 'antd';
import * as constants from './constants';



const baseURL = helpers.BACKEND_URL;
const getConfig = {
	headers: { "accept": "application/json" }
};
const postConfig = {
	headers: {
		"accept": "application/json",
		'Content-Type':'application/json'
	}
};


export const logout = () => ({
	type: constants.LOGOUT,
	loginStatus: false
});

// login and get user data
const getUserData = (data, token) => ({
	type: constants.GET_USER_DATA,
	loginStatus: true,
	userInfo: fromJS(data),
	token: fromJS(token)
});

const loginSuccess = () => {
	message.success('Login Success');
};

const loginFailure = () => {
	message.error('Login Failure');
};

export const login = (username, password) => {
	const loginURL = baseURL + '/auth/login';
	const loginData = {"username": username, "password": password}
	return (dispatch) => {
		// login auth post
		axios.post(loginURL, loginData, postConfig).then((res) => {
			loginSuccess();
			// get user info
			const userURL = baseURL + '/user/';
			const AxiosConfig = {
				headers: {
					"accept": "application/json",
					"Authorization": res.data.token
				}
			};
			axios.get(userURL, AxiosConfig).then((response) => {
				const userData = response.data;
				dispatch(getUserData(userData, res.data.token));
			}).catch(() => {
				console.log("Get UserInfo Failure!");
			});
		}).catch(() => {
			loginFailure();
		});
	}
};



