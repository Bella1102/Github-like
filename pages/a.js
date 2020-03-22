import { withRouter } from 'next/router'
import Head from 'next/head'
import { Button } from 'antd'
import styled from 'styled-components'
import './index.css'


const Title = styled.h1`
    color: yellow;
    font-size: 40px;
`

const A = ({ router, name }) => (
	<div className="container">
        <Title>Title</Title>
		<Button type="primary">A { router.query.id } {name}</Button>
	</div>
)

// 此方法return的内容都会作为A组件的props被获取
// 每次页面切换时都会执行
A.getInitialProps = async ctx => {

    const moment = await import('moment')
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'bella',
                time: moment.default(Date.now() - 60 * 1000).fromNow(),
            })
        }, 1000)
    })
    return await promise
}

export default withRouter(A)


