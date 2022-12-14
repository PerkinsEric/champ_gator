
import { Routes, Route } from "react-router-dom";
// import Home from './components/shared/home/Home';
import Menus from "./components/menus/Menus"

import Items from "./components/items/Items"


import Reservations from "./components/reservations/Reservations"
import Reviews from "./components/reviews/Reviews"

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = () => (
<>
    <Routes>
    <Route path="/" element={ <Menus /> } />
      <Route path="/menus" element={ <Menus /> } />

      <Route path="/menus/:menuid/items" element={ <Items />} />

      <Route path='/:userId/reservations' element={ <Reservations /> } />
      <Route path='/:userId/reviews' element={ <Reviews /> } />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Routes>
  </>
  
)


export default App;
