import Link from 'next/link'
import { Button } from 'antd'



export default ({ children }) => (
	<div>
		<header>
			{/* Link 下只能有一个直接子节点 */}
			<Link href="/"><Button type="primary">Back To Home</Button></Link>
			<Link href="/a?id=1" as="/a/1"><Button>Go To A</Button></Link>
			<Link href="/b"><Button>Go To B</Button></Link>
			<Link href="/hooks1"><Button type="primary">Go To Hooks1</Button></Link>
			<Link href="/hooks2"><Button>Go To Hooks2</Button></Link>
		</header>
		{children}
	</div>
)


