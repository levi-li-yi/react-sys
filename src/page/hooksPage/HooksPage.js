import React, {useState, useEffect} from 'react';

function HooksPage() {
    /*用useState来声明状态变量、修改方法*/
    const [count, setCount] = useState(0);
    /*替代生命周期函数componentDidMount、componentDidUpdate*/
    /*useEffect第二个参数为数组：当数组中写入状态时，即当状态值变化则解绑useEffect；当传空数组时则为组件被销毁时解绑useEffect*/
    useEffect(() => {
        console.log('useEffect click');
        return () => {
            console.log('unmount');
        }
    }, [count]);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>点击</button>
        </div>
    )
}
export default HooksPage;