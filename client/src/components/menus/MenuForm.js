import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const MenuForm = ({ addMenu, setAdd, id, name, mtime, updateMenu, setEdit }) => {
  const [menu, setMenu] = useState({ name: '', mtime: '' })
  
  useEffect( () => {
    if (id) {
      setMenu({ name, mtime })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateMenu(id, menu)
      setEdit(false)
    } else {
      addMenu(menu)
      setAdd(false)
    }
    setMenu({ name: '', mtime: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Menu Name</Form.Label>
          <Form.Control 
            name='name'
            value={menu.name}
            onChange={(e) => setMenu({...menu, name: e.target.value })}
            placeholder="menu name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control 
            name='time'
            value={menu.mtime}
            onChange={(e) => setMenu({...menu, mtime: e.target.value })}
            placeholder="time" 
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

export default MenuForm;