mport { Container, ListGroup } from 'react-bootstrap';
import ReservationShow from './ReservationShow';

const ReservationList = ({ reservations }) => (
  <Container>
    <ListGroup variant="flush">
      { reservations.map( r => 
        <ReservationShow 
          key={r.id}
          {...r}
        />
      )}
    </ListGroup>
  </Container>
)

export default ReservationList;