// import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router-dom";

const HomePoster = () => {
  const navigate = useNavigate();
  const booksNavigate = () => {
    navigate("/books");
  };

  return (
    <div className="container py-4">
      <div className="row align-items-center flex-column-reverse flex-md-row-reverse">
        <div className="col-md-6 col-12 mt-4 mt-md-0">
          <h1 className="display-5 fw-medium mb-3">New Releases This Week</h1>
          <p className="mb-4">
            It's time to update your reading list with some of the latest and
            greatest releases in the literary world. From heart-pumping
            thrillers to captivating memoirs, this week's new releases offer
            something for everyone.
          </p>
          <button className="btn btn-primary" onClick={booksNavigate}>
            Explore More Books
          </button>
        </div>

        <div className="col-md-6 col-12 text-center text-md-end">
          {/* <img
            src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
            alt="New Release Book"
            className="img-fluid"
          /> */}
          <div className="card text-bg-dark" style={{border: "none"}}>
            <img
              src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
              className="card-img"
              alt="Book"
            />
            <div className="card-img-overlay">
              <h2 className="card-title text-primary">Card title</h2>
              <p className="card-text text-dark">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              {/* <p className="card-text text-dark"><small>Last updated 3 mins ago</small></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePoster;
