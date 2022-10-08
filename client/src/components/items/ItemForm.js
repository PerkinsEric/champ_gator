import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const ItemForm = ({ addItem, setAdd, id, item_name, price, desc, updateItem, setEdit }) => {
  const [item, setItem] = useState({ item_name: '', price: '', desc: '' })
  
  useEffect( () => {
    if (id) {
      setItem({ item_name, price, desc })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateItem(id, item)
      setEdit(false)
    } else {
      addItem(item)
      setAdd(false)
    }
    setItem({ item_name: '', price: '', desc: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Item Name</Form.Label>
          <Form.Control 
            name='item_name'
            value={item.item_name}
            onChange={(e) => setItem({...item, item_name: e.target.value })}
            placeholder="item name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control 
            name='price'
            value={item.price}
            onChange={(e) => setItem({...item, price: e.target.value })}
            placeholder="price" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name='desc'
            value={item.desc}
            onChange={(e) => setItem({...item, desc: e.target.value })}
            placeholder="description" 
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default ItemForm;