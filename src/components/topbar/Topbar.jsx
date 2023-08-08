import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const admin = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = e => {
    e.preventDefault();
    logout(dispatch);
  }
  const handleSignin = () => {
    navigate("/login");
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lidlAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          {admin != null && admin.isAdmin ? <span onClick={handleLogout}>logout</span> : <span onClick={handleSignin}>signin</span>}
          </div>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAPp4Cyx0uAkK3RupL-EZJ4z-BPsC01kCIoBIbfPlyW208WBn_" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
