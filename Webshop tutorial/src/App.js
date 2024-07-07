import { Routes, Route  } from "react-router-dom";
import Startpage from "./routing/start-page/start-page.component"
import Navbar from "./routing/navbar/navbar.component";
import Shop from "./routing/shop/shop.component";
import SingIn from "./routing/sing-in/sing-in.component";



const App = () => {
  return (
    <Routes>
      <Route path="/" element ={<Navbar />}>
        <Route index element={<Startpage />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="sing-in" element={<SingIn />}/>
      </Route>
    </Routes>
  );
};

export default App;