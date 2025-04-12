import Sidebar from "../../components/Sidebar";

const MyReviews = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <h3>My Reviews</h3>
      </div>
    </div>
  );
};

export default MyReviews;
