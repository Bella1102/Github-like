import Link from 'next/link'
import Router from 'next/router'
import { connect } from 'react-redux';
import { Button } from 'antd'
import getConfig from 'next/config'
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


const Home = () => {

	return (
		<div className="container">
			Github
			<a href={publicRuntimeConfig.OAUTH_URL}>Go Login</a>
		</div>
	)
}
	
const mapState = (state) => {
	return {
        loginStatus: state.getIn(["combo", "loginStatus"]),
	}
}

const mapDispatch = (dispatch) => ({
   
})


export default connect(mapState, mapDispatch)(Home)
