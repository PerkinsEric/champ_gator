import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => (
  <>
    <ListGroup variant='flush'>
      { items.map( i =>
        <ListGroup.Item key={i.id}>
          {i.first_name} {i.last_name}
          <Link to={`/items/${i.id}`}>
            <Button>Show</Button>
          </Link>
        </ListGroup.Item>
      ) }
    </ListGroup>
  </>
)

export default ItemList;