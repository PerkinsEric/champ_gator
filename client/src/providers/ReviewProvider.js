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
        setReviews(newUpdatedReviews)
        navigate(`/${reviewId}/reviews`)
        window.location.reload()
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const deleteReview = (reviewId, id) => {
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