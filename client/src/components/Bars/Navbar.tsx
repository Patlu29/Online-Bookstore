import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/images/profile.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);


  return (
    <nav className="navbar bg-light border-bottom px-4 py-3 w-100">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <a className="navbar-brand fw-semibold" href="/">
            Book-Store
          </a>

          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-dark"
              type="submit"
              onClick={() => {
                navigate("/publishbook");
              }}
            >
              Search
            </button>
          </form>
        </div>
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              navigate("/admin-management");
            }}
          >
            Admin Panel
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              navigate("/authorregister");
            }}
          >
            Publish Book
          </button>
          {!isLoggedIn && (
            <button
              className="btn btn-outline-dark"
              onClick={() => {navigate("/login"), setIsLoggedIn(true)}}
            >
              Login
            </button>
          )}
          <img
            src={profile}
            alt="Profile"
            className="rounded-circle border"
            width="40"
            height="40"
            style={{ cursor: "pointer" }}
            onClick={() => {navigate('/profile')}}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
