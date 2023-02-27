import { Component } from "react";
import "./serach-box.style.css";

const Serachbox = (props) => {
    return(
        <input 
            className={`search-box ${props.className}`} 
            type={props.type} 
            placeholder={props.placeholder} 
            onChange={props.changeHandler}
        /> 
    )
}


// class Serachbox extends Component {
//     render() {
//         return(
//             <input 
//                 className={`search-box ${this.props.className}`} 
//                 type={this.props.type} 
//                 placeholder={this.props.placeholder} 
//                 onChange={this.props.changeHandler}
//             /> 
//         )
//     }
// }

export default Serachbox;