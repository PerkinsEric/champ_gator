import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ReservationContext = React.createContext();

export const ReservationConsumer = ReservationContext.Consumer;

const ReservationProvider = ({ children }) => {
  const [Reservations, setReservations] = useState([])
  const [unreservedUsers, setUsers] = useState([])

  const getAllReservations = (user Id) => {
    axios.get(`/api/users/${userId}/Reservations`)
      .then( res => setReservations(res.data))
      .catch( err => console.log(err))
  }

  const getAllunreservedUsers = (userId) => {
    axios.get(`/api/users/${userId}/unreserved`)
      .then( res => setUsers(res.data))
      .catch( err => console.log(err))
  }

  const addEnroll = (userId, Reservation) => {
    axios.post(`/api/users/${userId}/Reservations`, { Reservation })
      .then( res => setReservations([...Reservations, res.data]))
      .catch( err => console.log(err))
  }

  const updateReservation = (userId, id, Reservation) => {
    axios.put(`/api/users/${userId}/Reservations/${id}`, { Reservation })
      .then( res => {
        const newUpdatedReservations = Reservations.map( r => {
          if (r.id == id) {
            return res.data
          }
          return r
        })
        setReservations(newUpdatedReservations)
        // navigate(`/${userId}/Reservations`, { state: { userTitle } })
        window.location.reload()
      })
      .catch( err => console.log(err))
  } 

  const deleteReservation = (userId, id) => {
    axios.delete(`/api/users/${userId}/Reservations/${id}`)
      .then( res => setReservations( Reservations.filter( r => r.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <ReservationContext.Provider value={{
      Reservations,
      unreservedUsers,
      getAllReservations,
      getAllUnreservedUsers, 
      addReservation,
      updateReservation,
      deleteReservation,
    }}>
      { children }
    </ReservationContext.Provider>
  )
}

export default ReservationProvider;