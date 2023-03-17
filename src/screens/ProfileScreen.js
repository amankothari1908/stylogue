import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector((state) => state.selectUser);
  console.log(user);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1> Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://st3.depositphotos.com/29283810/36752/v/450/depositphotos_367520748-stock-illustration-mysterious-man-in-a-hood.jpg"
            alt=""
          />
          <div className="profileScreen__details">
            <div className="profileScreen_plans">
              <h3>plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
