import { Card, Modal, Button, Container, Row, Col, } from 'react-bootstrap';
import { ReviewConsumer } from '../../providers/ReviewProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewShow = ({ id, name, review, registry, deleteReview }) => {
  const [showing, setShow] = useState(false)

  return (
    <>
      <Card style={{ width: '12rem' }}>
     {/* Card.Img var   <iant="top" src={avatar} width='200px' height='200px' /> */}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            Show
          </Button>

          <Modal show={showing} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col>
                   Name: {name}
                    <br />
                    Registry: {registry}
                    <br />
                    <Link 
                      to={`/${id}/updateReview`}
                      state={{ name, review, registry, }}
                    >
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      onClick={() => deleteReview(id)}
                    >
                      Delete
                    </Button>
                    <Button>Review</Button>
                  </Col>
                  <Col>
                    {/* <Image src={avatar} width='200px' height='200px' /> */}
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </Card.Body>
      </Card>
    </>
  )
}

const ConnectedReviewShow = (props) => (
  <ReviewConsumer>
    { value => <ReviewShow {...props} {...value} />}
  </ReviewConsumer>
)

export default ConnectedReviewShow;