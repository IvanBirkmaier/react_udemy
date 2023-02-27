import { Component } from "react";
import "./cardlist.styles.css";
import Card from "../card/card.component";

const Cardlist = (props) => {
    const { users } = props;
    return (
        <div className="card-list">
            {users.map((user)=>{
                return(
                    <Card user = {user} />
                );
            })}
        </div>
    );            
}


// class Cardlist extends Component {
//     render(){
//         const { users } = this.props
//         return (
//         <div className="card-list">
//             {users.map((user)=>{
//                     return(
//                         <Card user = {user} />
//                     );
//                 })
//             }
//         </div>
//         )
//     }
// }

export default Cardlist;