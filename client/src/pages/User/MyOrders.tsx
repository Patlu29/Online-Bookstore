import Sidebar from "../../components/Sidebar";

const MyOrders = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <h3>My orders</h3>
      </div>
    </div>
  );
};

export default MyOrders;
