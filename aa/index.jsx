
// 实现一个React组件，要求如下：
// 1. 组件包含三个DOM：标题、列表、按钮
// 2. 列表需要从数据渲染，数据需要自行MOCK
// 3. 按钮点击时，操作页面的展示，例如显隐标题
// 4. 如果使用TS，需要标注出使用的数据的类型


import { useState, useEffect } from 'react'

// 
const dataAX = [
    {
        id: 1,
        name: 'shuju1'
    },
    {
        id: 2,
        name: 'shuju2'
    },
]
const promiseData = () => {
    return new Promise((reslove, reject) => {
        reslove(dataAX)
    })
}

const App = () => {
    const [data, setData] = useState([])
    const [close, setClose] = useState(false)
    useEffect(() => {
        promiseData().then((res) => {
            setData(res)
        })
    }, [])


    const handleClick = () => {
        setClose(!close)
    }
    return (
        <div>
            {!close && <h1>标题</h1>}

            <button onClick={handleClick}> 按钮 </button>
            {
                data.map((item) => {
                    return <span key={item.id}>{item.name}</span>
                })
            }
        </div>
    )
}

export default App