import React, {Component} from 'react';
import {Input, Button} from 'antd'

class SystemManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    render() {
        return (
            <div>
                <Input placeholder="请输入" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                <Button onChange={this.submitData.bind(this)}>提交</Button>
            </div>
        )
    }
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    submitData() {}
}

export default SystemManage;