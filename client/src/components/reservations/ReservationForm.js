import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ReservationConsumer } from '../../providers/ReservationProvider';


const ReservationForm = ({ addReservation, setAdd, unreservedUsers, id, user_id, updateReservation, setEdit, userId }) => {
  const [Reservation, setReservation] = useState({ user_id: 0 })

  useEffect( () => {
    if (id) {
      setReservation({ user_id })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateReservation(userId, id, Reservation)
      setEdit(false)
    } else {
      addReservation(userId, Reservation)
      setAdd(false)
    }
    setReservation({ user_id: 0 })
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User</Form.Label>
          <Form.Select
            name='user_id'
            value={Reservation.user_id}
            onChange={(e) => setReservation({...Reservation, user_id: parseInt(e.target.value) })}
            required
          >
            <option>Choose a user</option>
            { unreservedUsers.map( u => 
              <option value={u.id} key={u.id}>
                {u.name} 
              </option>
            )}
          </Form.Select>
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}


const ConnectedReservationForm = (props) => (
  <ReservationConsumer>
    { value => <ReservationForm {...value} {...props} /> }
  </ReservationConsumer>
)

export default ConnectedReservationForm;