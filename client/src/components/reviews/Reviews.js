import { ReviewConsumer } from "../../providers/ReviewProvider"

const reviews = ({ }) => {
  return (
    <>
    
    </>
  )
}

const ConnectedReviews = (props) => (
  <ReviewConsumer>
    { value => <Reviews {...props} {...value} /> }
  </ReviewConsumer>
)

export default ConnectedReviews;