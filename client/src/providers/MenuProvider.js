import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MenuContext = React.createContext();

export const MenuConsumer = MenuContext.Consumer;

const MenuProvider = ({ children }) => {
  const [menus, setMenus] = useState([])
  const navigate = useNavigate()

  const getMenus = () => {
    axios.get('/api/menus')
      .then( res => setMenus(res.data))
      .catch( err => console.log(err) )
  }

  const addMenu = (menu) => {
    axios.post(`/api/menus`, { menu })
      .then( res => setMenus([...menu, res.data]))
      .catch( err => console.log(err) )
  }

  const updateMenu = (id, menu) => {
    axios.put(`/api/menus/${id}`, { menu })
      .then( res => {
        const newUpdatedMenus = menus.map( m => {
          if (m.id === id) {
            return res.data
          }
          return m
        })
        setMenus(newUpdatedMenus)
        navigate('/menus')
        window.location.reload()
      })
      .catch( err => console.log(err) )
  }

  const deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        setMenus(menus.filter( m => m.id !== id ))
        navigate('/menus')
        window.location.reload()
      })
      .catch( err => console.log(err) )
  }

  return (
    <MenuContext.Provider value={{
      menus, 
      getMenus,
      addMenu, 
      updateMenu,
      deleteMenu,
    }}>
      { children }
    </MenuContext.Provider>
  )
}

export default MenuProvider;