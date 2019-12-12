import React, {Component} from 'react';
import './DocumentManage.scss'
import {Input, Button, Table } from 'antd'
import EditDialog from './component/EditDialog'
import TabCom from 'component/TabCom'

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
            typeData: '',
            dataSource: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                }
            ],
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age'
                },
                {
                    title: '地址',
                    dataIndex: 'address',
                    key: 'address'
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <span>
                            <a onClick={this.deleteData.bind(this, record)}>Delete</a>
                        </span>
                    ),
                },
            ],
            visible: false,
            dialogTitle: '新增',
            newName: '',
            newAge: '',
            newAddress: '',
        }
        this.changeNewName = this.changeNewName.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.selectTab = this.selectTab.bind(this)
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
                <TabCom
                    title={this.state.title}
                    activeId={this.state.activeId}
                    selectTab={this.selectTab}
                />
                {/*类型配置输入框*/}
                <div className="config_panel">
                    <Input placeholder="请输入" value={this.state.typeData} onChange={this.inputChange.bind(this)}/>
                    <Button type="primary" onClick={this.addItem.bind(this)}>新增</Button>
                </div>
                {/*数据表格*/}
                <div className="data_table">
                    <Table dataSource={this.state.dataSource} columns={this.state.columns}/>
                </div>
                {/*新增弹窗*/}
                <EditDialog
                    visible={this.state.visible}
                    dialogTitle={this.state.dialogTitle}
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                    newName={this.state.newName}
                    newAge={this.state.newAge}
                    newAddress={this.state.newAddress}
                    changeNewName={this.changeNewName}
                />
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
    addItem() {
        this.setState({
            visible: true
        })
    }
    handleOk() {
        const item = {
            key: Math.random(),
            name: this.state.newName,
            age: this.state.newAge,
            address: this.state.newAddress
        }
        this.setState({
            dataSource: [...this.state.dataSource, item]
        })
    }
    handleCancel() {
        this.setState({
            visible: false
        })
    }
    changeNewName(field, e){
        this.setState({
            [field]: e.target.value
        })
    }
    deleteData(data) {
        const key = data.key
        const list = this.state.dataSource
        let num = 0
        list.forEach((item, index) => {
            if (item.key === key) {
                num = index
            }
        })
        list.splice(num, 1)
        this.setState({
            dataSource: list
        })
    }
}

export default DocumentManage;
