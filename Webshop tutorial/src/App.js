import { Routes, Route  } from "react-router-dom";
import Startpage from "./routing/start-page/start-page.component"
import Navbar from "./routing/navbar/navbar.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element ={<Navbar />}>
        <Route index element={<Startpage />}/>
      </Route>
    </Routes>
  );
};

export default App;