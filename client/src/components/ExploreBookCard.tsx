import axios from "axios";
import { useEffect, useState } from "react";
import Rating from "../pages/Rating & Reviews/Rating";

interface Books {
  title: string;
  author: string;
  genre: string;
  price: number | string;
  year: number | string;
  description: string;
  image_url: string;
  star_rating: number;
  rating_count: number;
}

const ExploreBookCard = (filter: { filter: string }) => {
  const [bookData, setBookData] = useState<Books[]>([]);

  useEffect(() => {
    GetBooks();
  }, [filter]);

  const GetBooks = () => {
    axios
      .get(`http://localhost:3900/book/${filter.filter}`)
      .then((response) => {
        console.log(response.data);

        const filteredData = response.data.data.map((bookData: Books) => ({
          title: bookData.title,
          author: bookData.author,
          genre: bookData.genre,
          price: bookData.price,
          description: bookData.description,
          image_url: bookData.image_url,
          star_rating: bookData.star_rating,
          rating_count: bookData.rating_count
        }));
        setBookData(filteredData);
        console.log(filteredData);
      });
  };

  return (
    <div className="row gap-3">
      {bookData.map((book, index) => (
        <div className="card mb-3 p-3" style={{ maxWidth: "540px" }} key={index}>
          <div className="row g-3">
            <div className="col-md-4">
              <img
                src={book.image_url}
                className="img-fluid rounded-start"
                alt={book.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <b>{book.title}</b>
                </h5>
                <p className="card-text">
                  {book.author} | {book.genre} <br /> Price: ₹<b>{book.price}</b>
                </p>
                <Rating star={book.star_rating} count={book.rating_count}/>
              </div>
              <button className="btn btn-outline-dark">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreBookCard;
