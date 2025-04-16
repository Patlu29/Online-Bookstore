const ReviewCard = () => {
  return (
    <div>
      <h3>Reviews: </h3>
      <div className="card border-0">
        <div className="card-header d-flex justify-content-between">
          <h5>user name</h5>
          <h6>
            <small>date</small>
          </h6>
        </div>
        <div className="card-body">
          <h5 className="card-title">main content</h5>
          <p className="card-text">
            description about book
          </p>
        </div>
      </div>
      <input type="text" placeholder="Leave a review about book.." className="form-control"/>
    </div>
  );
};

export default ReviewCard;
