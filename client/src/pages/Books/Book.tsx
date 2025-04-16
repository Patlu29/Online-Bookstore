import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../../components/Reviews/Rating";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number | string;
  description: string;
  image_url: string;
  star_rating: number;
  rating_count: number;
}

const Book = () => {
  const location = useLocation();
  const { title } = location.state as { title: string };
  console.log(title);

  const [book, setBook] = useState<Book[]>([]);

  useEffect(() => {
    GetBook();
  }, [title]);

  const GetBook = async () => {
    axios.get(`http://localhost:3900/books/book/${title}`).then((response) => {
      // console.log(response.data);
      const bookData = response.data.data;
      const filteredData = [
        {
          id: bookData.id,
          title: bookData.title,
          author: bookData.author,
          genre: bookData.genre,
          price: bookData.price,
          description: bookData.description,
          image_url: bookData.image_url,
          star_rating: bookData.star_rating,
          rating_count: bookData.rating_count,
        },
      ];
      setBook(filteredData);
      console.log("hii", filteredData);
    });
  };

  return (
    <div className="container text-center">
      {book.map((data) => (
        <>
          <div className="d-flex align-items-center">
            <div>
              <img
                src={data.image_url}
                alt={data.title}
                style={{ width: "300px" }}
              />
            </div>
            <div>
              <h2>
                <b>{data.title}</b>
              </h2>
              <p>
                Author: <b>{data.author}</b> | Genre: <b>{data.genre}</b>
              </p>
              <p>
                <b>Description: </b>
                {data.description}
              </p>
              <h4>Price: ₹{data.price}</h4>
              <div className="d-flex justify-content-around">
                <Rating star={data.star_rating} count={data.rating_count} />
                <button className="btn btn-outline-dark">Buy Now</button>
                <button className="btn btn-outline-dark">Add to Cart</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Book;
