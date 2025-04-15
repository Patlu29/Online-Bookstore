import { Book } from "../entity/Books";
import * as dotenv from "dotenv";
import { AppDataSource } from "../data-source";
import axios from "axios";

dotenv.config();

interface BookData {
  title: string;
  author: string;
  genre: string;
  description: string;
  image_url: string;
  price: number;
  published_at: string | number;
}

async function BookAPIFetch() {
  try {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=subject:Fairytale&key=${process.env.GOOGLE_BOOKS_API}`;

    const response = await axios.get(URL);

    const books: BookData[] = response.data.items.map((item: any): BookData => {
        const volume = item.volumeInfo || {};
        const sale = item.saleInfo || {};
      
        return {
          title: volume.title || "Untitled",
          author: volume.authors?.[0] || "Unknown Author",
          genre: volume.categories?.[0] || "Unknown Genre",
          description: volume.description || "No Description",
          price:
            sale.saleability === "FOR_SALE" && sale.retailPrice?.amount
              ? sale.retailPrice.amount
              : 0,
          image_url:
            volume.imageLinks?.thumbnail || "nothing",
          published_at: volume.publishedDate || "Unknown Date",
        };
      });
      
      const repo = AppDataSource.getRepository(Book)
      repo.insert(books)
    

  } catch (e) {
    console.error("Failed to fetch books:", e);
  }
}
BookAPIFetch();

