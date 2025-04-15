

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
    <div className="card cursor-pointer" style={{ width: "15rem", height: 'auto'}} >
      <div className="d-flex justify-content-center p-2">
        <img
          src={image}
          className="card-img-top"
          alt="Book"
          style={{ width: "100px", height: "150px", objectFit: "cover" }}
        />
      </div>

      <h5 className="card-title text-center px-2">
        <b>{title}</b> <br />
        <small>by <b>{author}</b>({year})</small>
      </h5>

      <div className="card-body">
        <h6 className="card-title">Genre: {genre}</h6>
        <h6 className="card-title">Price: ₹{price}</h6>
        <p className="card-text"><b>{description}</b></p>
      </div>
    </div>
  );
};

export default BookCard
