
const AdminCard = () => {
  return (
    <div className="row gap-5">
      <div className="col-sm-4 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Manage Users</h5>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Manage Books</h5>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Manage Reviews</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
