const ReviewsList = ({ reviews }) => {
    if (!reviews.length) {
      return <h3>No Reviews Yet</h3>;
    }
  
    return (
      <div>
        <div className="flex-row justify-space-between my-4">
          {reviews &&
            reviews.map((review) => (
              <div key={review.reviewBody}>
                <div>
                  <h4>
                    {review.reviewBody} <br />
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default ReviewsList;
  