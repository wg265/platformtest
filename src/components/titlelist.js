import React, {Component} from 'react';

class Titlelist extends Component {
    render() {
        let {data} = this.props;
        console.log("died", data);
        return (
            <div>
                {
                        data.map((object, i) => {
                        return <div className={"manobject" + i} key = {i}>
                            <h2>{object.name}</h2>
                            <h2>{object.address}</h2>
                            <h2>{object.time}</h2>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Titlelist;