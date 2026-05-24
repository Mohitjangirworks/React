import { Component } from "react";
class ClassComponent extends Component {//Component ka use krke classCOmponent bna rhe hai 
    constructor() {
        super()       //Mandatory
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        console.log("hello")
    }
    handleButtonClick=()=>{//class method
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <h1>HEllo {this.state.count}</h1>
                <button onClick={this.handleButtonClick}>Increment</button>
            </div>
        )

    }
}
export default ClassComponent;