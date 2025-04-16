import Sidebar from "../../components/Bars/Sidebar"
import profile from '../../assets/images/profile.svg'

const Profile = () => {
    
  const token = localStorage.getItem('token');
  let payload;
  if (token) {
    console.log(" im token", token);
      payload = JSON.parse(atob(token.split('.')[1]));
    }
      console.log(payload);
    

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <h2>Personal Info</h2>
        <img src={profile} alt="Profile" className="w-25"/>
        <div className="m-5 h-25 ">
        <h3>Name : <b>{payload ? payload.userName : ""}</b></h3>
        <h3>Mail: <b>{payload ? payload.email: ""}</b></h3>
        <h3>Role: <b>{payload ? payload.role: ""}</b></h3>
        </div>
      </div>
    </div>
  )
}

export default Profile
