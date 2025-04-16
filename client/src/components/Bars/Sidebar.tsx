import { Link, useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/home");
    window.location.reload()
  };


  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="d-flex flex-column p-3" style={{ width: '250px', height: '100vh' }}>
      <h4 className="text-center mb-4">My Account</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <Link
            to="/profile"
            className={`nav-link ${isActive("/profile") ? "active text-white" : "text-dark"}`}
          >
            <i className="bi bi-person me-2"></i> Profile
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link
            to="/my-orders"
            className={`nav-link ${isActive("/my-orders") ? "active text-white" : "text-dark"}`}
          >
            <i className="bi bi-bag-check me-2"></i> My Orders
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link
            to="/my-reviews"
            className={`nav-link ${isActive("/my-reviews") ? "active text-white" : "text-dark"}`}
          >
            <i className="bi bi-star me-2"></i> My Reviews
          </Link>
        </li>
        <li className="nav-item mt-4">
          <button onClick={handleLogout} className="btn btn-outline-danger w-100">
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
