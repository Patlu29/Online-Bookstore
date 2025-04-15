import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";

interface Book {
  title: string;
  author: string;
  genre: string;
  price: number | string;
  year: number | string;
  description: string;
  image: string;
}

const getRandomBooks = (books: Book[], count: number) => {
  const shuffled = [...books].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const TopSelling = () => {
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [randomBooks, setRandomBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/data.json");
        if (!response.ok) throw new Error("Failed to fetch data");

        const rawData: Book[] = await response.json();
        setAllBooks(rawData);
        setRandomBooks(getRandomBooks(rawData, 10));
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchData();
  }, []);

  const refreshBooks = () => {
    setRandomBooks(getRandomBooks(allBooks, 10));
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Top Selling :-</h3>
        <button className="btn btn-outline-primary btn-sm" onClick={refreshBooks}>
          Refresh
        </button>
      </div>

      <div className="d-flex overflow-auto gap-3 align-items-stretch">
        {randomBooks.map((book) => (
          <div key={book.title} style={{ flex: "0 0 auto", width: "240px" }}>
            <BookCard {...book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
