import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {Image, Carousel} from "antd";
import u60 from "../../assets/images/header/u60.jpg";
import {Link} from "react-router-dom";
class ShouyePart1 extends Component {
    render() {
        const content_style = {
            width : 650,
            height : 360,
            left : 0,
            top : 0,
            display : "inline_block"
        };
        return (
                <Carousel autoplay className= "shouye_part1" style={{display:"inline-block"}}>
                    <div style = {content_style}>
                        <img style = {content_style} src = {`./Images/1.png`} alt="image1"/>
                    </div>
                    <div style = {content_style}>
                        <img style = {content_style} src = {`./Images/2.png`} alt="image2"/>
                    </div>
                    <div style = {content_style}>
                        <img style = {content_style} src = {`./Images/3.png`} alt="image3"/>
                    </div>
                </Carousel>
        );
    }
}

export default ShouyePart1;