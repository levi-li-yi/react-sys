import React, {Component} from 'react';
import {Input, Button} from 'antd'
import store from 'store/index'
import {dictAction} from 'store/dictStore'

/*该组件在状态管理上采用纯redux的方法: 组件中订阅的派发store*/
class BaseMessage extends Component {
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.state = store.getState().dictReducer;
        console.log(this.state);
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <div>
                <Input placeholder="请输入" value={this.state.inputTypeValue} onChange={this.inputChange}/>
                <Button onClick={this.addItem}>提交</Button>
            </div>
        )
    }
    // input输入框change
    inputChange(e) {
        console.log('cahge');
        const action = dictAction.changeInputAction(e.target.value);
        store.dispatch(action)
    }
    // list添加
    addItem() {
        const value = this.state.inputTypeValue;
        const action = dictAction.addInputAction(value);
        store.dispatch(action)
    }
    // 状态change
    storeChange() {
        this.setState(store.getState().dictReducer)
    }
}

export default BaseMessage;