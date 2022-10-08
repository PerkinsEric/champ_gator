import ReviewShow from './ReviewShow';
import { Container, Row, Col } from 'react-bootstrap';

const ReviewList = ({ reviews }) => (
  <Container>
    <Row md='4' sm='12'>
      { cats.map( r => 
        <Col key={r.id}>
          <CatShow
            {...r}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default ReviewList;