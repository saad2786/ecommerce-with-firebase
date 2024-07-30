import React from "react";
import "./ProfileMenu.scss";
import { MdPerson } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";
import { signOut as signOutFromRedux } from "../../redux/userReducer";
import { useNavigate } from "react-router";
import { logout } from "../../redux/authReducer";

const auth = getAuth(app);
const ProfileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className='profileMenu'>
      <div>
        <MdPerson size={20} />
        <p>Profile</p>
      </div>
      <div>
        <IoSettingsSharp size={20} />
        <p>Settings</p>
      </div>

      <hr />
      <div onClick={handleSignOut} className='logout'>
        <FaPowerOff size={20} />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default ProfileMenu;
