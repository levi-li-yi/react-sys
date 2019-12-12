import React from 'react'
import {Input, Button, Modal } from 'antd'

const EditDialog = (props) => {
    return (
        <Modal
            visible={props.visible}
            title={props.dialogTitle}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            footer={[
                <Button key="back" onClick={props.handleCancel}>取消</Button>,
                <Button key="submit" type="primary" onClick={props.handleOk}>确定</Button>,
            ]}>
            <p>
                <Input placeholder="请输入姓名" value={props.newName} onChange={(e) => {props.changeNewName('newName', e)}}/>
                <Input placeholder="请输入年龄" value={props.newAge} onChange={(e) => {props.changeNewName('newAge', e)}}/>
                <Input placeholder="请输入地址" value={props.newAddress} onChange={(e) => {props.changeNewName('newAddress', e)}}/>
            </p>
        </Modal>
    )
};

export default EditDialog;