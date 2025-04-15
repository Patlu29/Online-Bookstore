import { useState } from "react";
// import Sidebar from "../../components/Sidebar";

const OrderPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [success, setSuccess] = useState("");

  const handleOrder = () => {

    if (!name || !address || quantity <= 0) {
      alert("Please fill all fields correctly.");
      return;
    }

    console.log("Order Placed:", { name, address, quantity });
    setSuccess("Order placed successfully!");

    setName("");
    setAddress("");
    setQuantity(1);
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* <Sidebar /> */}
      <div className="container py-4 flex-grow-1">
        <h3 className="mb-4">Place Your Order</h3>

        <div className="card mb-4 border border-0" style={{ maxWidth: "400px" }}>
          <img
            src="https://via.placeholder.com/400x250"
            className="card-img-top"
            alt="Book cover"
          />
          <div className="card-body">
            <h5 className="card-title">Book Title</h5>
            <p className="card-text">Author Name</p>
            <p className="card-text fw-bold">Price</p>
          </div>
        </div>

        <form onSubmit={handleOrder} style={{ maxWidth: "500px" }}>
          {success && <div className="alert alert-success">{success}</div>}

          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Shipping Address</label>
            <textarea
              className="form-control"
              placeholder="Full address"
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
