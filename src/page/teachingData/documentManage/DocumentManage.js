import React, {Component} from 'react';
import './DocumentManage.scss'
import {Input, Button} from 'antd'

class DocumentManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [
                {
                    name: '字典修改',
                    id: '123'
                },
                {
                    name: '分类管理',
                    id: '321'
                }
            ],
            activeId: '',
            typeData: ''
        }
    }
    componentWillMount() {
        const init = this.state.title[0].id;
        this.setState({
            activeId: init
        })
    }
    render() {
        return (
            <div className="documentManage_page">
                <p className="page_title">参数配置</p>
                {/*tab*/}
                <div className="tab_panel">
                    {
                        this.state.title.map((item) => {
                            return (
                                <p
                                    key={item.id}
                                    className={item.id === this.state.activeId ? 'active_item' : ''}
                                    onClick={this.selectTab.bind(this, item.id)}
                                >{item.name}</p>
                            )
                        })
                    }
                </div>
                {/*类型配置输入框*/}
                <div className="config_panel">
                    <Input placeholder="请输入" value={this.state.typeData} onChange={this.inputChange.bind(this)}/>
                    <Button type="primary" onClick={this.addItem.bind(this)}>新增</Button>
                </div>
            </div>
        )
    }
    selectTab(id) {
        this.setState({
            activeId: id
        })
    }
    inputChange(e) {
        this.setState({
            typeData: e.target.value
        })
    }
    addItem() {}
}

export default DocumentManage;
