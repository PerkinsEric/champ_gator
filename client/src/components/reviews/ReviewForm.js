import { useState, useEffect } from 'react';
import { ReviewConsumer } from '../../providers/ReviewProvider'; 
import { Button, Form } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';

const ReviewForm = ({ addReview, setAdd, updateReview }) => {
  const [review, setReview] = useState({ score: '', comment: '', })
  const { id } = useParams();
  const location = useLocation()
   
  useEffect( () => {
    if (id) {
      const { score, comment } = location.state 
      setReview({ score,comment })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateReview(id, review)
    } else {
      addReview(review)
      setAdd(false)
    }
    setReview({ score: '', comment: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Score</Form.Label>
          <Form.Control 
            type='score'
            name='score'
            value={review.score}
            onChange={(e) => setReview({ ...review, score: e.target.value })}
            required  
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control 
            name='breed'
            value={review.comment}
            onChange={(e) => setReview({ ... review, comment: e.target.value })}
            required  
          />
      
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedReviewShow = (props) => (
  <ReviewConsumer>
    { value => <ReviewForm {...props} {...value} />}
  </ReviewConsumer>
)

export default ConnectedReviewShow;