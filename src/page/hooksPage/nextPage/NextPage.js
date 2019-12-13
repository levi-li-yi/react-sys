import React, {useState, useRef} from 'react';
import Child from './component/Child'

function NextPage() {
    const [user, setUser] = useState('用户');
    const [manager, setManager] = useState('管理员');
    const inputEl = useRef(null);
    const getRef = () => {
        console.log(inputEl.current.value);
    };
    return (
        <div>
            <input type="text" ref={inputEl}/>
            <button onClick={getRef}>Ref</button>
            {/*setUser触发user的变化*/}
            <button onClick={() => {setUser('JACK' + Math.random())}}>用户点击</button>
            {/*setManager触发管理员的变化*/}
            <button onClick={() => {setManager('ADMIN' + Math.random())}}>管理员点击</button>
            {/*传入属性用户user；传入内容管理员*/}
            <Child name={user}>{manager + '管理员'}</Child>
        </div>
    )
}

export default NextPage;