import React, {Component} from 'react';
import {Menu, Popover} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import u72 from '../assets/images/header/u72.svg';
import u60 from '../assets/images/header/u60.jpg';
import {keys_1, array_1} from "../constants";
import {BrowserRouter, Link} from 'react-router-dom'
class Header extends Component {

    constructor() {
        super();
    }
    render() {
        const {current} = this.props;
        const popoverContent = (
            <div>
                <p style = {{textAlign:"center"}}>
                    这里是工作台
                </p>
                <p style = {{textAlign:"center"}}>
                    请点击这里开始工作
                </p>
            </div>
        );
        return (
            <Menu
                onClick = {this.props.onMenuChange}
                selectedKeys = {[current]}
                mode = "horizontal"
                theme={"dark"}
                className= "header_menu"
            >
                <Menu.Item style = {{paddingLeft : 20, textAlign : "left"}} key = "shouye">
                    <BrowserRouter>
                        <a href = "http://localhost:3000">
                    <picture style={{paddingRight : 10}}><img id="u2160_img" src = {u60} alt="首页"/></picture>
                        中国海油深化改革信息管理平台
                    </a>
                    </BrowserRouter>
                </Menu.Item>
                {array_1.map((value, i)=>{
                    let str = "/" + keys_1[i];
                    return <Menu.Item key = {keys_1[i]} >
                        <BrowserRouter>
                        <Link to = {str}>
                        {value}
                        </Link>
                        </BrowserRouter>
                        </Menu.Item>
                })}

                <Menu.Item style = {{paddingRight : 0}}>
                    <Popover content={popoverContent} placement = "bottom">
                        <a href = "http://localhost:8080">
                            <picture>
                                    <img id="u2166_img" src = {u72} alt="工作台"/>
                            </picture>
                        </a>
                    </Popover>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Header;