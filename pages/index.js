import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'
import './index.css'


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
		</div>
	)
}
	


export default Home
