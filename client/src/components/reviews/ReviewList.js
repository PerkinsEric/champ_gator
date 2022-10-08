import ReviewShow from './ReviewShow';
import { Container, ListGroup } from 'react-bootstrap';

const ReviewList = ({ reviews, userId }) => (
  <Container>
  <h1>All Reviews</h1>
  <ListGroup variant="flush">
    { reviews.map( r => 
      <ReviewShow 
        key={r.id}
        {...r}
        userId={userId}
      /> 
    )}   
  </ListGroup>
</Container>
)

export default ReviewList;