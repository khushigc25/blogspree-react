import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="inline-block px-6 py-3 rounded-lg text-white bg-transparent hover:bg-blue-500 hover:text-white transition-colors duration-200"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
