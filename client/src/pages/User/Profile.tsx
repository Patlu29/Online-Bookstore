import Sidebar from "../../components/Sidebar"
import profile from '../../assets/images/profile.svg'

const Profile = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <h2>Personal Info</h2>
        <img src={profile} alt="Profile" className="w-25"/>
        <div className="m-5 h-25 ">
        <h3>Name :{""}</h3>
        <h3>Mail: {""}</h3>
        </div>
      </div>
    </div>
  )
}

export default Profile
