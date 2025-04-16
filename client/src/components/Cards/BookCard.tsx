import Rating from "../Reviews/Rating";

interface BookProps {
  title: string;
  author: string;
  genre: string;
  price: number | string;
  year: number | string;
  description: string;
  image: string;
}

const BookCard = ({
  title,
  author,
  genre,
  price,
  year,
  description,
  image,
}: BookProps) => {
  return (
    <div
      className="card h-100 d-flex flex-column shadow-sm"
      style={{ width: "100%", minWidth: "220px", maxWidth: "250px" }}
    >
      <div className="d-flex justify-content-center p-3">
        <img
          src={image}
          className="card-img-top"
          alt="Book"
          style={{ width: "100px", height: "150px", objectFit: "cover" }}
        />
      </div>

      <div className="px-3 text-center">
        <h6 className="fw-bold">{title}</h6>
        <small className="text-muted">
          by <b>{author}</b> ({year})
        </small>
      </div>

      <div className="card-body d-flex flex-column">
        <h6 className="mb-1">
          Genre: <span className="text-secondary">{genre}</span>
        </h6>
        <h6 className="mb-2">Price: ₹{price}</h6>
        <p
          className="card-text small text-muted flex-grow-1"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxHeight: "3.6em",
            lineHeight: "1.2em",
          }}
        >
          {description}
        </p>

        <div className="mt-2">
          <Rating count={33} star={3.5} />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
