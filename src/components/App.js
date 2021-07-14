import React, {Component} from 'react';
import Titlelist from "./titlelist";
import Header from "./Header";
import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import Footer from "./Footer";
import Zuzhijigou from "./Zuzhijigou/Zuzhijigou";
import {API_ROOT} from "../constants";
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import Gaigeguanli from "./Gaigeguanli/Gaigeguanli";
import Gaigeyaowen from "./Gaigeyaowen/Gaigeyaowen";
import Gaigeshijian from "./Gaigeshijian/Gaigeshijian";
import Ziyuanpingtai from "./Ziyuanpingtai/Ziyuanpingtai";
import Huiyiguanli from "./Huiyiguanli/Huiyiguanli";
import Wendangguanli from "./Wendangguanli/Wendangguanli";
import Shouye from "./Shouye/Shouye";
import Shouyaorenwu from "./Shouyaorenwu/Shouyaorenwu";
class App extends Component{
  state = {
    data : [],
    err : '',
    selected_key : '',
  };
    onMenuChange = e => {
        console.log('click', e.key);
        if (e.key != "shouye") {
            this.setState({selected_key: e.key});
        }
        else {
            this.setState({selected_key : ''});
            this.forceUpdate();
        }
    };
  constructor() {
    super();
    this.GetDatafromBackEnd();
  }

  GetDatafromBackEnd = () => {
      console.log("start fetching data...");
      // fetch(`${API_ROOT}/platform/site1`, {
      //   method: 'GET',
      // }).then((response) => {
      //   if (response.ok) {
      //     console.log(response);
      //     let datastream = response.json();
      //     console.log("haha", datastream);
      //     return datastream;
      //   }
      //   else {
      //     throw new Error("fetch data failed");
      //   }
      // }).then((data) => {
      //   let stream = data;
      //   this.setState({
      //     data : stream
      //   })
      //   console.log(stream);
      // }).catch(err => {
      //   console.log("err");
      //   this.setState({
      //     err : 'fetch data filed'
      //   });
      // });
  };

  GetCurrentSite = () => {
      let str = '/' + this.state.selected_key;
      return <Redirect to = {str} />
  };
    getShouye = () => {
        return <Redirect to = "/shouye"/>
    };
    render() {
    return (
      <div className="App">
        <Header onMenuChange = {this.onMenuChange} current = {this.state.selected_key} className = "header"/>
        <div key = {this.state.selected_key} className= "mid">
            <BrowserRouter>
                <Switch>
                    <Route path = "/shouyaorenwu" component = {Shouyaorenwu}/>
                    <Route path = "/gaigeyaowen" component = {Gaigeyaowen}  />
                    <Route path = "/gaigeguanli" component = {Gaigeguanli}/>
                    <Route path = "/gaigeshijian" component = {Gaigeshijian}/>
                    <Route path = "/ziyuanpingtai" component = {Ziyuanpingtai}/>
                    <Route path = "/huiyiguanli" component = {Huiyiguanli}/>
                    <Route path = "/wendangguanli" component={Wendangguanli}/>
                    <Route path = "/zuzhijigou" component = {Zuzhijigou}/>
                    <Route path = "/shouye" component={Shouye}/>
                    <Route path = "/" render={this.getShouye}/>
                </Switch>
            </BrowserRouter>
        </div>
          <Footer className = "footer"/>
      </div>
    );
  }
}

export default App;
