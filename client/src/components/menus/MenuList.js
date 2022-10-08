import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuList = ({ menus }) => (
  <>
    <ListGroup variant='flush'>
      { menus.map( m =>
        <ListGroup.Item key={m.id}>
          {m.name} {m.mtime}
          <Link to={`/menus/${m.id}`}>
            <Button>Show</Button>
          </Link>
        </ListGroup.Item>
      ) }
    </ListGroup>
  </>
)

export default MenuList;