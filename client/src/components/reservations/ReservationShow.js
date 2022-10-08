import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ReservationList from './ReservationList';
import { Modal, Button } from 'react-bootstrap';
import ReservationForm from './ReservationForm';

import { ReservationConsumer } from '../../providers/ReservationProvider';

const Reservations = ({ getAllReservations, getAllUnreservedUsers, unreservedUsers, reservations}) => {
  const { userId } = useParams()
  const location = useLocation()
  const { Title } = location.state
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllReservations(userId)
    getAllUnreservedUsers(userId)
  }, [])

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Make a reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReservationForm 
            unreservedUsers={unreservedUsers}
            setAdd={setAdd}
            userId={userId}
          />
        </Modal.Body>
      </Modal>
      <h1>All reservations for the user {Title}</h1>
      <ReservationList 
        reservations={reservations}
      />
    </>
  )
}

const ConnectedReservations = (props) => (
  <ReservationConsumer>
   { value => <Reservations {...value} {...props} />} 
  </ReservationConsumer>
)

export default ConnectedReservations;