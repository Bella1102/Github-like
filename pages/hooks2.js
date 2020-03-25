import React, { useState, useReducer, useEffect, useRef, memo, useMemo, useCallback } from 'react'
import { Button } from 'antd'


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

    // const config = {
    //     text: `count is ${count}`,
    //     color: count > 3 ? 'red' : 'blue'
    // }
    const config = useMemo(() => ({
        text: `count is ${count}`,
        color: count > 3 ? 'red' : 'blue',
    }), [count])
    
    // const handleButtonClick = useMemo(() => 
    //     () => () => dispatchCount({ type: 'add' }),
    //     [],
    // )
    const handleButtonClick = useCallback( 
        () => dispatchCount({ type: 'add' }),
        [],
    )

    // { current: '' }
    const countRef = useRef()
    countRef.current = count
    
    const handleAlertButtonClick = function() {
        setTimeout(() => {
            // alert(count)
            alert(countRef.current)
        }, 2000)
    }

    return (
        <div>
            <input value={name} onChange={ e => setName(e.target.value) } />
            <Child config={config} onButtonClick={ handleButtonClick } />
            <button onClick={ handleAlertButtonClick }>alert count</button>
        </div>
    )
}

const Child = memo(function Child({ onButtonClick, config }) {
    console.log('child render')
    return (
        <button onClick={onButtonClick} style={{ color: config.color }}>
            {config.text}
        </button>
    )
})

export default MyCountFunc