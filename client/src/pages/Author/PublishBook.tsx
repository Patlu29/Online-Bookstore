import { useState } from "react";

interface Book {
  title: string;
  author: string;
  genre: string;
  price: number | string;
  publishedYear: number | string;
  description: string;
  image: string;
}

const PublishBookForm = () => {

  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    genre: "",
    price: "",
    publishedYear: "",
    description: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setBook((prevBook) => ({
      ...prevBook,
      [name]: name === "price" || name === "year" || name === "publishedYear" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Book:", book);
    alert("Book published successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded" style={{ maxWidth: "500px", margin: "auto" }}>
      <h3 className="mb-3 text-center">Publish a Book</h3>

      <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} className="form-control mb-2" required />
      <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} className="form-control mb-2" required />
      <input type="text" name="genre" placeholder="Genre" value={book.genre} onChange={handleChange} className="form-control mb-2" required />
      <input type="number" name="price" placeholder="Price" value={book.price} onChange={handleChange} className="form-control mb-2" required />
      <input type="number" name="publishedYear" placeholder="Published Year" value={book.publishedYear} onChange={handleChange} className="form-control mb-2" required />
      <textarea name="description" placeholder="Description" value={book.description} onChange={handleChange} className="form-control mb-2" rows={3} required />
      <input type="text" name="image" placeholder="Book Image URL" value={book.image} onChange={handleChange} className="form-control mb-3" required />

      <button type="submit" className="btn btn-primary w-100">Publish</button>
    </form>
  );
};

export default PublishBookForm;
