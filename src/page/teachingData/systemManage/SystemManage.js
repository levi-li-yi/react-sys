import React, {Component} from 'react';
import {Input, Button, List} from 'antd'

class SystemManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '123'
        }
    }
    render() {
        return (
            <div>
                <Input placeholder="请输入"/>
                <Button>提交</Button>
            </div>
        )
    }
}

export default SystemManage;