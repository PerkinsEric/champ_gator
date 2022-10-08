import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ReviewContext = React.createContext();

export const ReviewConsumer = ReviewContext.Consumer; 

const ReviewContext = ({ children }) => {
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const getAllReviews = (userId) => {
    axios.get(`/api/reviews/${userId}/user`)
      .then( res => setReviews(res.data))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const addReview = (userId, review) => {
    axios.post(`/api/users/${userId}/reviews`, { review })
      .then( res => setReviews([...notes, res.data]))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const updateReview = (catId, id, note) => {
    axios.put(`/api/cats/${catId}/notes/${id}`, { note })
      .then( res => {
        const newUpdatedReviews = notes.map(n => {
          if (n.id !== id) {
            return res.data
          }
          return n
        })
        setReviews(newUpdatedReviews)
        navigate(`/${catId}/notes`)
        window.location.reload()
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const deleteReview = (catReview, id) => {
    axios.delete(`/api/reviews/${reviewId}/reviews/${id}`)
      .then(res => {
        setReviews(reviews.filter(r => r.id !== id))
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
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