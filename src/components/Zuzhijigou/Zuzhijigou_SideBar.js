import React, {Component} from 'react';
import {Menu} from "antd";

class ZuzhijigouSideBar extends Component {

    handleClick = e => {
        console.log("CCCCCCCCCCCCCCCCCCCC", e.key);
        this.props.ChangeZuzhijigou(e.key);
        this.setState({
            current_selected_key : e.key
        });
    };
    render() {
        const {current_jigou} = this.props;
        return (
            <Menu onClick={this.handleClick}
            mode = "inline"
            defaultSelectedKeys={['1']}
            selectedKeys={[current_jigou]}
            id = "8_1"
            className= "zuzhijigou_leftside"
            >
                {this.props.zuzhijigou.map(((jigou) => {
                    return <Menu.Item key = {jigou.id}>{jigou.name}</Menu.Item>
                }))}
            </Menu>
        );
    }
}

export default ZuzhijigouSideBar;