import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Image, Button } from "react-bootstrap";
import { ItemConsumer } from "../../providers/ItemProvider";
import ItemForm from "./ItemForm";

const ItemShow = ({ updateItem, deleteItem }) => {
  const [item, setItem] = useState({ item_name: '', price: '', desc: '' })
  const { id } = useParams()
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/items/${id}`)
      .then( res => setItem(res.data) )
      .catch( err => console.log(err) )
  })

  const { item_name, price, desc } = item
  return (
    <>
      { editing ?
        <>
          <ItemForm
            id={id}
            item_name={item_name}
            price={price}
            desc={desc}
            updateItem={updateItem}
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
          <h1>{item_name} {price} {desc}</h1>
          <Image 
            src={img}
            alt={item_name}
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
            onClick={() => deleteItem(id)}
          >
            Delete
          </Button>
          <br />
        </>
      }
    </>
  )
}

const ConnectedItemShow = (props) => (
  <ItemConsumer>
    { value => <ItemShow {...value} {...props} />}
  </ItemConsumer>
)

export default ConnectedItemShow;