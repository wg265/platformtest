import React, {Component} from 'react';
import ZuzhijigouSideBar from "./Zuzhijigou_SideBar";
import ZuzhijigouBiaoge from "./Zuzhijigou_RightSide";
import {API_ROOT} from "../../constants";
import ZuzhijigouSearchBar from "./Zuzhijigou_SearchBar";

class Zuzhijigou extends Component {
    state = {
        zuzhijigou : [],
        all_people : {},
        data : {},
        current_jigou : '1',
        current_peoplegroup : []
    };
    ChangeZuzhijigou = (key) => {
        this.setState({
           current_jigou : key,
           current_peoplegroup : this.state.all_people[key]
        });
    };
    GetZuzhijigou = () => {
        console.log("start fetching data...");
        fetch(`${API_ROOT}/platform/zuzhijigou`, {
            method: 'GET',
        }).then((response) => {
            if (response.ok) {
                console.log(response);
                let datastream = response.json();
                return datastream;
            }
            else {
                throw new Error("fetch data failed");
            }
        }).then((data) => {
            let stream = data.zuzhijigou;
            let people = [];
            if (data.all_people) {
                people = data.all_people;
            }
            let current_peoplegroup = people["1"];
            this.setState({
                zuzhijigou : stream,
                all_people : people,
                current_peoplegroup : current_peoplegroup
            });
        }).catch(err => {
            console.log("err");
            this.setState({
                err : 'fetch data filed'
            });
        });
    };
    onSearchName = (name) => {
        console.log(name);
        this.setState({
            current_peoplegroup : [],
            current_jigou : 0
        });
        let array = [];
        let data = this.state.all_people;
        console.log(data);
        for (var key in data) {
            let temp_array = data[key];
            for (var index in temp_array) {
                console.log(index, temp_array[index]);
                let people = temp_array[index];
                if (people.name == name) {
                    array.push(people);
                }
            }
        }
        console.log(array);
        this.setState({
            current_peoplegroup : array
        })
    };
    componentDidMount() {
        this.GetZuzhijigou();
    };
    render() {
        console.log("bbbbbbbb", this.state.current_peoplegroup);
        return (
            <div className="zuzhijigou">
                <ZuzhijigouSearchBar onSearch = {this.onSearchName}/>
                <div className= "zuzhijigou_down">
                <ZuzhijigouSideBar
                    zuzhijigou = {this.state.zuzhijigou}
                    ChangeZuzhijigou = {this.ChangeZuzhijigou}
                    current_jigou = {this.state.current_jigou}
                />
                <ZuzhijigouBiaoge
                    dataSource = {this.state.current_peoplegroup}
                />
                </div>
            </div>
        );
    }
}

export default Zuzhijigou;