import React, {Component} from 'react';
import {Card, Carousel} from "antd";
import ShouyePart1 from "./Shouye_part1";
import ShouyePart2 from "./Shouye_part2";
import ShouyePart3 from "./Shouye_part3";
import {API_ROOT} from "../../constants";
const part1 = ["shouyaorenwu", "jituanyaowen", "buweiyaowen"];
class Shouye extends Component {
    state = {
        all_data : {},
        part2 : {},
    };
    GetAlldata= () =>{
        console.log("getalldata");
        var obj = fetch(`${API_ROOT}/platform/shouye`, {
            method : 'GET'}).then((response) => {
            if (response.ok) {
                console.log(response);
                let datastream = response.json();
                return datastream
            }
            else {
                throw new Error("shouye date fetch failed");
            }
        }).then((response) => {
            var obj = {};
            for (var name in response) {
                console.log(name);
                let temp_array = response[name];
                console.log("sssssssssssssssssssss", temp_array);
                if (part1.indexOf(name) !== -1) {
                    obj[name] = temp_array;
                }
            }
            console.log(obj, response, "xxxxxxxxxxxxxxxxxx",name);
            this.setState({
                all_data : response,
                part2 : obj,
            });
        });
    };
    constructor() {
        super();
        this.GetAlldata();
    }
    render() {
        const content_style = {
            width : 650,
            height : 360,
            left : 0,
            top : 0,
            display : "inline_block"
        };
        console.log("sl;adfkjal;fdj",this.state.part2);
        return (
            <div className= "shouye">
                <div className= "shouye_upper">
                <ShouyePart1/>
                <ShouyePart2 all_data = {this.state.part2}/>
                </div>
                <div className= "shouye_mid">
                <ShouyePart3/>
                </div>
            </div>
        );
    }
}

export default Shouye;