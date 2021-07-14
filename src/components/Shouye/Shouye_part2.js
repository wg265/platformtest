import React, {Component} from 'react';
import {Card, List, Menu} from "antd";
import {BrowserRouter, Link} from 'react-router-dom'

import u2186 from '../../assets/images/u2186.svg'
class ShouyePart2 extends Component {
    state = {
        selected_key : "shouyaorenwu",
        selected_data : []
    };
    Part2MenuChange = (e) => {
        let all_data = this.props.all_data;
        let data = all_data[e.key];
        console.log("pppppppppppppp", e.key, this.props.all_data, data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]["biaoti"]);
        }
        this.setState({
            selected_key : e.key,
            selected_data : data
        })
    };
    constructor() {
        super();

    }
    componentDidMount() {
        console.log("ppppppppppppp", this.props);
        let cur_key = this.state.selected_key;
        let all_data = this.props.all_data;
        console.log("xxxxxxxxxxxxxxxxxxxxx", all_data, this.props.all_data);
        if (typeof(all_data) == "undefined") {
            all_data = {};
        }
        let data = all_data[cur_key];
        if (typeof (data) == "undefined") {
            data = [];
        }
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]["biaoti"]);
        }
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx", data);
        this.setState({
            selected_data : data,
        })
    }

    render() {
        const part2_menu = {
            marginLeft : 10,
            marginRight : 10
        };
        let {all_data} = this.props;
        let key = this.state.selected_key;
        console.log("in render", this.props.all_data, key, all_data[key]);
        return (
            <div>
                <Card className= "shouye_part2">
                        <Menu
                            onClick = {this.Part2MenuChange}
                            mode= "horizontal"
                            className= "shouye_part2_menu"
                            defaultSelectedKeys= "shouyaorenwu"
                            >
                            <Menu.Item key = "shouyaorenwu" style = {part2_menu}>首要任务</Menu.Item>
                            <Menu.Item key = "jituanyaowen" style = {part2_menu}>集团要闻</Menu.Item>
                            <Menu.Item key = "buweiyaowen" style = {part2_menu}>部委要闻</Menu.Item>
                        </Menu>
                    <List dataSource={all_data[key]}
                          renderItem={item => (
                              <List.Item style={{display :"flex"}}>
                                  <img src = {u2186} style = {{height : "62px", width : "45px"}}/>
                                  <span className= "listitem">{item.biaoti}</span>
                              </List.Item>
                          )}/>
                </Card>
            </div>
        );
    }
}

export default ShouyePart2;