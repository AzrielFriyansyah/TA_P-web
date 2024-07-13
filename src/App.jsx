// import { useState } from "react";
import Navbar from "./Components/Navbar/NavSide";
import Profile from "./Components/Profile/ProfileSide";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="NavContainer">
        <Navbar />
      </div>
      <div className="ProfileContainer">
        <Profile />
      </div>
    </div>
  );
}

export default App;
