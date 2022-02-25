import react, { Component } from "react";

// class Car extends Component {
//   render() {
//     return <div>This is a react class base component</div>;
//   }
// }

// function Hello(props) {
//     return(
//         <div>
//             {/* <div>i love functional component</div> */}
//             <p>{props.title}</p>
//         </div>
//     )
// }

class Car extends Component {
    constructor(){
        super();
        this.state = {color: "red"};
    }
    render() {
        return(
            <div>
                <p>i love cxolor {this.state.color} </p>
            </div>
        )
    }
}

export default Car