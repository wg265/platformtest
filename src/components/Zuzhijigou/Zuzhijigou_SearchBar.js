import React, {Component} from 'react';
import {Button, Input, Space} from 'antd';
import {AudioOutlined, DownloadOutlined} from '@ant-design/icons';
class ZuzhijigouSearchBar extends Component {
    render() {
        const {Search} = Input;
        return (
            <div className= "zuzhijigou_searchbar">

                <Button type="primary" shape="round"  className= "Zuzhijigou_searchbutton">导出通讯录
                </Button>
                <Search
                    placeholder = "输入姓名以搜索联系人"
                    allowClear
                    enterButton = "Search"
                    onSearch = {this.props.onSearch}
                    className= "zuzhijigou_search"/>
            </div>
        );
    }
}

export default ZuzhijigouSearchBar;