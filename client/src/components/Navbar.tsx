import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicked outside
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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar bg-light border-bottom px-4 py-3 w-100">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <a className="navbar-brand fw-semibold" href="#">
            Book-Store
          </a>

          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>

          <div className="dropdown" ref={dropdownRef}>
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
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-outline-dark">Publish Book</button>
          <button className="btn btn-outline-dark">Login</button>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-circle border"
            width="40"
            height="40"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
