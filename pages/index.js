import Link from 'next/link'
import Router from 'next/router'
import { connect } from 'react-redux';
import { Button } from 'antd'
import getConfig from 'next/config'
import { actionCreators } from '../redux/oneStore';
import { add, rename } from '../redux/oneStore/actionCreators'
import './index.css'



const { publicRuntimeConfig } = getConfig()

const events = [
	'routeChangeStart',
	'routeChangeComplete',
	'routeChangeError',
	'beforeHistoryChange',
	'hashChangeStart',
	'hashChangeComplete',
]
  
function makeEvent(type) {
	return (...args) => {
		console.log(type, ...args)
	}
}
  
events.forEach(event => {
	Router.events.on(event, makeEvent(event))
})


const Home = (count, username, add, rename) => {

	return (
		<div className="container">
			<span>Count: {count}</span>
			<span>UserName: {username}</span>
			<button onClick={() => add(count)}>do add</button>
			<input value={username} onChange={e => rename(e.target.value)} />
			<a href={publicRuntimeConfig.OAUTH_URL}>Go Login</a>
		</div>
	)
}

Home.getInitialProps = async ({reduxStore }) => {
	reduxStore.dispatch(add(3))
	return {}
}
	
const mapState = (state) => {
	return {
		count: state.combo.count,
		username: state.combo.username
	}
}

const mapDispatch = (dispatch) => ({
	add(num) {
		dispatch(actionCreators.add(num))
	},
	rename(name) {
		dispatch(actionCreators.rename(name))
	}
})


export default connect(mapState, mapDispatch)(Home)
