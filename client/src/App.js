
import { Routes, Route } from "react-router-dom";

import Menus from "./components/menus/Menus"
import Reservations from "./components/reservations/Reservations"
import Reviews from "./components/reviews/Reviews"

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = () => (
<>
    <Routes>
    <Route path="/menus" element={ <Menus /> } />
      <Route path="/menus" element={ <Menus /> } />
      <Route path='/:userId/reservations' element={ <Reservations /> } />
      <Route path='/:userId/reviews' element={ <Reviews /> } />
    </Routes>
  </>
  
)


export default App;
