import { Routes, Route } from "react-router-dom";

import Menus from "./components/menus/Menus"
import Items from "./components/items/Items"

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = () => (
  <>
    <Routes>
      <Route path="/menus" element={ <Menus /> } />
      <Route path="/menus/:menuid/items" element={ <Items />} />
    </Routes>
  </>
)

export default App;
