import { useEffect, useState } from "react";
import axios from "axios";

interface Review {
  userName: string;
  rating: number;
  comment: string;
  created_at: string;
  user: {userName: string};
}

interface Props {
  title: string;
}

const Reviews: React.FC<Props> = ({ title }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchReviews();
  }, [title]);

  const fetchReviews = () => {
    axios
      .get(`http://localhost:3900/review/book/${title}`)
      .then((response) => {
        const data = response.data.data;

        const reviewData = 
          data.map((item: Review) => ({
              rating: item.rating,
              comment: item.comment,
              created_at: item.created_at.split(":")[0],
              userName: item.user.userName
            }))
            console.log(reviewData);
            
        setReviews(reviewData);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  };

  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.length > 0 ? (
        reviews.map((data, index) => (
          <div className="card border-0 mb-3" key={index}>
            <div className="card-header d-flex justify-content-between">
              <h5>{data.userName}</h5>
              <h6>
                <small>{data.created_at}</small>
              </h6>
            </div>
            <div className="card-body">
              <h5 className="card-title">{data.comment}</h5>
            </div>
          </div>
        ))
      ) : (
        <p>No reviews found.</p>
      )}

      <input
        type="text"
        placeholder="Leave a review about the book..."
        className="form-control mt-3"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
    </div>
  );
};

export default Reviews;
