import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ReviewContext = React.createContext();

export const ReviewConsumer = ReviewContext.Consumer; 

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const getAllReviews = (userId) => {
    axios.get(`/api/reviews/${userId}/user`)
      .then( res => setReviews(res.data))
      .catch( err => console.log(err))
  }

  const addReview = (userId, review) => {
    axios.post(`/api/users/${userId}/reviews`, { review })
    .then( res => setReviews([...reviews, res.data]))
    .catch( err => console.log(err))
}

  const updateReview = (userId, id, note) => {
    axios.put(`/api/users/${userId}/reviews/${id}`, { reviews })
      .then( res => {
        const newUpdatedReviews = reviews.map(n => {
          if (n.id !== id) {
            return res.data
          }
          return n
        })
        setReviews(newUpdatedReviews)
        // navigate(`/${userId}/reviews`)
        window.location.reload()
      })
      .catch( err => console.log(err))
    } 

  const deleteReview = (userId, id) => {
    axios.delete(`/api/users/${userId}/reviews/${id}`)
      .then(res =>  setReviews(reviews.filter(r => r.id !== id)))
      .catch( err => console.log(err))
    }
  
  return (
    <ReviewContext.Provider value={{
      reviews,
      errors,
      setErrors, 
      getAllReviews,
      addReview, 
      updateReview,
      deleteReview,
    }}>
      { children }
    </ReviewContext.Provider>
  )
}

export default ReviewProvider;