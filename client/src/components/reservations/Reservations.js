import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ReservationList from './ReservationList';
import { Modal, Button } from 'react-bootstrap';
import ReservationForm from './ReservationForm';
import { ReservationConsumer } from '../../providers/ReservationProvider';

const Reservations = ({ getAllReservations, getAllUnreservedUsers, unreservedUsers, Reservations}) => {
  const { userId } = useParams()
  const [adding, setAdd] = useState(false)
  const location = useLocation()
  console.log(location)
  // const { Title } = location.state

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
          <Modal.Title>All Reservations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReservationForm 
            unreservedUsers={unreservedUsers}
            setAdd={setAdd}
            userId={userId}
          />
        </Modal.Body>
      </Modal>
      <h1>All Reservations </h1>
      {/* <ReservationList 
        Reservations={Reservations}
      /> */}
    </>
  )
}

const ConnectedReservations = (props) => (
  <ReservationConsumer>
   { value => <Reservations {...value} {...props} />} 
  </ReservationConsumer>
)

export default ConnectedReservations;