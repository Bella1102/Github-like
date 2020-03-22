import { withRouter } from 'next/router'
import { Button } from 'antd'
import './index.css'



const B = ({ router }) => (
	<div className="container">
		<Button type="primary">B { router.query.id }</Button>
	</div>
)

export default withRouter(B)