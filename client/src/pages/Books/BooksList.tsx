import { useState } from "react";
import BooksFilter from "../../components/BooksFilter";
import ExploreBookCard from "../../components/ExploreBookCard";

const BooksList = () => {
  const [selectedFilter, setSelectedFilter] = useState("AllBooks");

  return (
    <div>
      <BooksFilter onFilterChange={setSelectedFilter} />
      <div className="d-flex flex-wrap gap-5 m-5">
        <ExploreBookCard filter={selectedFilter} />
      </div>
    </div>
  );
};

export default BooksList;
