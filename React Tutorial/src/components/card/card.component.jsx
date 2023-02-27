import { Component } from "react";
import "./card.style.css";
const Card = (props) => {
    const {id, name, email} = props.user;  
        return (
            <div className="card-container"key={id}>
                <img alt={`users ${name}`} src={`https://robohash.org/${id}?set=set2`}></img>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        );  


}


// class Card extends Component {
//     render(){
//         const {id, name, email} = this.props.user;  
//         return (
//             <div className="card-container"key={id}>
//                 <img alt={`users ${name}`} src={`https://robohash.org/${id}?set=set2`}></img>
//                 <h1>{name}</h1>
//                 <p>{email}</p>
//             </div>
//         );  
//     }
// }
export default Card;