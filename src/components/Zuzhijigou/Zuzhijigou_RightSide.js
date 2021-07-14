import React, {Component} from 'react';
import {Table, Tag, Space} from 'antd';
class ZuzhijigouBiaoge extends Component {

    render() {
        const columns = [
            {
                title:'姓    名',
                dataIndex:'name',
                key:'name',
                align:'center',
                render: text => <a>{text}</a>
            },
            {
                title:'部    门',
                dataIndex: 'bumen',
                key:'bumen',
                align:'center',
                render: text => <a>{text}</a>
            },
            {
                title:'职    责',
                dataIndex:'zhize',
                key:'zhize',
                align:'center',
                render: text => <a>{text}</a>
            },
            {
                title:'移动电话',
                dataIndex:'yidongdianhua',
                key:'yidongdianhua',
                align:'center',
                render: text => <a>{text}</a>
            },
            {
                title:'办公室电话',
                dataIndex:'bangongshidianhua',
                key:'bangongshidianhua',
                align:'center',
                render: text => <a>{text}</a>
            },
            {
                title:'备    注',
                dataIndex:'beizhu',
                key:'beizhu',
                align:'center',
                render: text => <a>{text}</a>
            }
        ];
        return (
            <Table dataSource={this.props.dataSource} columns = {columns} className = "zuzhijigou_rightside" pagination={{ pageSize: 9 }}/>
        );
    }
}

export default ZuzhijigouBiaoge;