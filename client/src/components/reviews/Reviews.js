import { ReviewConsumer } from "../../providers/ReviewProvider"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from './ReviewList';
import { Button, Modal } from 'react-bootstrap';
import ReviewForm from './ReviewForm';


const Reviews= ({ reviews, getAllReviews }) => {
  const params = useParams();
  const [adding, setAdd] = useState(false)
  console.log(params)
  // useEffect( () => {
  //   getAllReviews(reviewId)
  // }, [])

  return (
    <>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>
{/* 
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <reviewForm 
            setAdd={setAdd}
            userId={userId}
          />
        </Modal.Body>
      </Modal> */}
      {/* <ReviewList 
        reviews={reviews}
        userId={userId}
      /> */}
    </>
  )
}

const ConnectedReviews = (props) => (
  <ReviewConsumer>
    { value => <Reviews {...props} {...value} /> }
  </ReviewConsumer>
)

export default ConnectedReviews;