import { Component } from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cardlist from "./components/card-list/card-list.component"
import Searchbox from "./components/serach-box/serach-box.component"

const App = () => {
  const [serachField, setSearchField] = useState("");
  const [users, setUsers] = useState([]);
  const [filtertuser, setFiltertuser] = useState(users);
  const serchinput = (event) => {
    const serachstring = event.target.value.toLowerCase()
    setSearchField(serachstring)
  };
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => response.json())
    .then((users) => setUsers(users))
  },[])
 useEffect(()=>{
    const filteredusers = users.filter((user) => {
                  console.log(serachField)
                  return user.name.toLowerCase().includes(serachField);});
    setFiltertuser(filteredusers);
  },[users, serachField]);
  
  
  return (
    <div>
      <Searchbox 
          changeHandler={serchinput} 
          className="users-serach-box" 
          placeholder="serch user" 
      />
      <Cardlist users={filtertuser}/>
    </div>
  );
}


// class App extends Component {
//   constructor() {
//     console.log("constructor")
//     super();
//     this.state = {
//       users: [],
//       serachstring: ''
//     };
//   }
//   componentDidMount() {
//     console.log("componentDidMount")
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then( (response) => response.json())
//     .then((users) => this.setState(() => {
//       return {users: users}
//     }))
//   }
//   serchinput = (event) => {
//     const serachstring = event.target.value.toLowerCase()
//     this.setState(() => { return {serachstring};})
//   };
//   render() {
//     console.log("render")

//     const {users, serachstring} = this.state;
//     const {serchinput} = this;

//     const filteredusers = users.filter((user) => {
//       console.log(serachstring)
//       return user.name.toLowerCase().includes(serachstring);
//     });
//     return (
//       <div>
//         <Searchbox 
//             changeHandler={serchinput} 
//             className="users-serach-box" 
//             placeholder="serch user" 
//         />
//         <Cardlist users={filteredusers}/>
//       </div>
//     );
//   }
// }
export default App;
