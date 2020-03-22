import Link from 'next/link'
import { Button } from 'antd'



export default ({ children }) => (
	<div>
		<header>
			{/* Link 下只能有一个直接子节点 */}
			<Link href="/a?id=1" as="/a/1">
				<Button type="primary">GoToA</Button>
			</Link>
			<Link href="/b">
				<Button>GoToB</Button>
			</Link>
		</header>
		{children}
	</div>
)


