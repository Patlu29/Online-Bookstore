import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";
import Rating from "../Rating & Reviews/Rating";

interface Book {
  title: string;
  author: string;
  genre: string;
  price: number | string;
  year: number | string;
  description: string;
  image: string;
}

const BooksCards = () => {
  const [data, setData] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await fetch("/assets/data.json");
      
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const rawData: Book[] = await response.json();
      setData(rawData);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  return (
    <>
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {data.slice(0, 10).map((book) => (
        <BookCard
          key={book.title}
          title={book.title}
          author={book.author}
          genre={book.genre}
          price={book.price}
          year={book.year}
          description={book.description}
          image={book.image}
        />
      ))}
    </div>
    </>
  );
};

export default BooksCards;
