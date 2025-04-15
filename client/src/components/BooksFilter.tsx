import { useState, useRef, useEffect } from "react";

type BooksFilterProps = {
  onFilterChange: (filter: string) => void;
};

const BooksFilter = ({ onFilterChange }: BooksFilterProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Books");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
    setDropdownOpen(false);
    onFilterChange(filter);
  };

  return (
    <div>
      <div className="dropdown" ref={dropdownRef}>
        <span>Filter: </span>
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="btn btn-outline-dark dropdown-toggle"
          type="button"
          aria-expanded={dropdownOpen}
        >
          {selectedFilter}
        </button>
        <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
          {[
            "All Books",
            "Fiction",
            "Drama",
            "Science",
            "computers",
            "History",
          ].map((filter) => (
            <li key={filter}>
              <button
                className="dropdown-item"
                onClick={() => handleFilterSelect(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BooksFilter;
