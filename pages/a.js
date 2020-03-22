import Head from 'next/head'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { Button } from 'antd'
import moment from 'moment'
import './index.css'


const Title = styled.h1`
    color: yellow;
    font-size: 40px;
`

const A = ({ router, name, time }) => (
	<div className="container">
        <Title>Title {time}</Title>
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
                time: moment.default(Date.now() - 60 * 1000 * 24).fromNow(),
            })
        }, 100)
    })
    return await promise
}

export default withRouter(A)


