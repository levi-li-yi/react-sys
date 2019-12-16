import React from 'react';
import {Input, Button} from 'antd'
import {useMappedState, useDispatch} from 'redux-react-hook';
import {types} from 'store/dictStore'

/*在react hooks中使用redux-react-hook做的状态管理*/
function ReduxPage(props) {
    const inputTypeValue = useMappedState(state => state.dictReducer.inputTypeValue);
    const typeList = useMappedState(state => state.dictReducer.typeList);
    const dispatch = useDispatch();
    function inputChange(e) {
        const action = {
            type: types.CHANGE,
            value: e.target.value
        };
        dispatch(action)
    }
    function addItem() {
        const action  = {
            type: types.ADD
        };
        dispatch(action)
    }
    return (
        <div>
            <Input placeholder="请输入" value={inputTypeValue} onChange={inputChange}/>
            <Button onClick={addItem}>提交</Button>
            <ul>
                {
                    typeList.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ReduxPage;