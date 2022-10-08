import ReservationList from './ReservationList';
import { useEffect, useState } from 'react';
import { reservationConsumer } from '../../providers/reservationProvider';
import ReservationForm from './ReservationForm';
import { Button, Modal } from 'react-bootstrap';

const reservations = ({ reservations, getAllReservations }) => {
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllReservations()
  }, [])

  return (
    <>
      <Button 
        onClick={() => setAdd(true)}
      >
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReservationForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>

      <h1>My Reservations</h1>
      <ReservationList
        reservations={reservations}
      />
    </>
  )
}

const ConnectedReservations = (props) => (
  <ReservationConsumer>
    { value => <Reservations {...props} {...value} /> }
  </ReservationConsumer>
)

export default ConnectedReservations;