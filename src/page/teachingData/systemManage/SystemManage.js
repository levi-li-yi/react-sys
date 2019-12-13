import React from 'react';
import {Input, Button} from 'antd'
import {connect} from 'react-redux'
import {types} from 'store/dictStore'

const SystemManage = (props) => {
    let {inputTypeValue, typeList, inputChange, addItem, test, inputTypeValue1} = props;
    return (
        <div>
            <h1>{inputTypeValue1}</h1>
            <h3>{test}</h3>
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

/*将state转化成props：使用combineReducers模块化reducer以后需要在对应的reducer模块(dictReducer)中获取state的值*/
const stateToProps = (state) => {
    return {
        inputTypeValue: state.dictReducer.inputTypeValue,
        typeList: state.dictReducer.typeList,
        test: state.userReducer.test,
        inputTypeValue1: state.userReducer.inputTypeValue,
    }
};
/*将dispatch需要发布的action转化成props*/
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = {
                type: types.CHANGE,
                value: e.target.value
            };
            dispatch(action)
        },
        addItem() {
            const action  = {
                type: types.ADD
            };
            dispatch(action)
        }
    }
};
/*connect是连接组件跟store的工具*/
export default connect(stateToProps, dispatchToProps)(SystemManage);