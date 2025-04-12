// import 'bootstrap/dist/css/bootstrap.min.css';

const HomePoster = () => {
  return (
    <div className="container py-4">
      <div className="row align-items-center flex-column-reverse flex-md-row-reverse">
        
        {/* Text Section */}
        <div className="col-md-6 col-12 mt-4 mt-md-0">
          <h1 className="display-5 fw-medium mb-3">New Releases This Week</h1>
          <p className="mb-4">
            It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.
          </p>
          <button className="btn btn-primary">Subscribe</button>
        </div>

        {/* Image Section */}
        <div className="col-md-6 col-12 text-center text-md-end">
          <img
            src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
            alt="New Release Book"
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
};

export default HomePoster;
