import { Routes, Route } from "react-router-dom";

import Menus from "./components/menus/Menus"

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = () => (
  <>
    <Routes>
      <Route path="/menus" element={ <Menus /> } />
    </Routes>
  </>
)

export default App;
