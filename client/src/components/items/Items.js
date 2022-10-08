import { useState } from 'react';
import ItemList from './ItemList';
import ItemForm from './ItemForm';
import { Modal, Button } from 'react-bootstrap';
import { ItemConsumer } from '../../providers/ItemProvider';

const Items = ({ addItem, items }) => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemForm addItem={addItem} setAdd={setAdd} />
        </Modal.Body>
      </Modal>

      <h1>All Items</h1>
      <ItemList 
        items={items}
      />
    </>
  )
}

const ConnectedItems = (props) => (
  <ItemConsumer>
    { value => <Items {...value} {...props} /> }
  </ItemConsumer>
)

export default ConnectedItems;