import { useState, useRef, useEffect } from "react";

const BooksFilter = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
          Categories
        </button>
        <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
          <li>
            <a className="dropdown-item" href="#">
              Tech
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Books
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Clothing
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BooksFilter;
