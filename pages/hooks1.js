import React, { Component, useState, useReducer, useEffect, useRef } from 'react'
import { Button } from 'antd'


class MyCount extends Component {

    state = {
        count: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    render() {
        return <span>{this.state.count}</span>
    }
}

function countReducer(state, action) {
    switch (action.type) {
        case 'add':
            return state + 1
        case 'minus':
            return state - 1
    }
}

function MyCountFunc() {
    // 传入的默认变量只有在第一次的时候有用
    // const [count, setCount] = useState(0)

    const [ count, dispatchCount ] = useReducer(countReducer, 0)
    const [ name, setName ] = useState('bella')

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // setCount(c => c + 1)
    //         dispatchCount({ type: 'add' })
    //     }, 1000)
    //     return () => clearInterval(interval)
    // }, [])

    useEffect(() => {
        console.log('effect invoked')
        return () => console.log('effect detected')
    }, [])

    return (
        <div>
            <div><input value={name} onChange={(e) => setName(e.target.value) }></input></div>
            <Button type="primary" onClick={() => dispatchCount({ type: 'add' })}>{ count }</Button>
        </div>
    )
}

export default MyCountFunc