import { useState, useEffect } from 'react';
import MenuList from './MenuList';
import MenuForm from './MenuForm';
import { Modal, Button } from 'react-bootstrap';
import { MenuConsumer } from '../../providers/MenuProvider';

const Menus = ({ addMenu, menus, getMenus }) => {
  const [adding, setAdd] = useState(false)
    
  useEffect(() => {
    getMenus()
  }, [adding])

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MenuForm addMenu={addMenu} setAdd={setAdd} />
        </Modal.Body>
      </Modal>

       <h1>All Menus</h1>
      <MenuList 
        menus={menus}
      /> 
    </>
  )
}

const ConnectedMenus = (props) => (
  <MenuConsumer>
    { value => <Menus {...value} {...props} /> }
  </MenuConsumer>
)

export default ConnectedMenus;