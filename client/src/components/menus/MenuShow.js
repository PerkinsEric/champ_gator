import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Image, Button } from "react-bootstrap";
import {ItemList} from "./../items/ItemList"
import { MenuConsumer } from "../../providers/MenuProvider";
import MenuForm from "./MenuForm";

const MenuShow = ({ updateMenu, deleteMenu }) => {
  const [menu, setMenu] = useState({ name: '', mtime: '' })
  const { id } = useParams()
  const [menuItems, setMenuItems] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/menus/${id}`)
      .then( res => setMenu(res.data) )
      .catch( err => console.log(err) )

    axios.get(`/api/${id}/menuItems`)
      .then( res => setMenuItems(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const { name, mtime } = menu
  return (
    <>
      { editing ?
        <>
          <MenuForm
            id={id}
            name={name}
            mtime={mtime}
            updateMenu={updateMenu}
            setEdit={setEdit}
          />
          <Button 
            variant="warning"
            onClick={() => setEdit(false)}
          >
            Cancel
          </Button>
        </>
        :
        <>
          <h1>{name} {mtime}</h1>
          <Image 
            src={img}
            alt={name}
            width='300'
          />
          <Button 
            variant="warning"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deleteMenu(id)}
          >
            Delete
          </Button>
          <br />
          <h1>All Items in Menu</h1>
          <ItemList items={menuItems} />
        </>
      }
    </>
  )
}

const ConnectedMenuShow = (props) => (
  <MenuConsumer>
    { value => <MenuShow {...value} {...props} />}
  </MenuConsumer>
)

export default ConnectedMenuShow;