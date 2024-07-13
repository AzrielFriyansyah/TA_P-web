import "./NavSide.css";
import Icon from "../../assets/logo.png";
import { GoHomeFill } from "react-icons/go";

function NavbarSide() {
  return (
    <>
      <div className="navbar">
        <img src={Icon} alt="Logo" className="logo" />
        <h1>SMILE</h1>

        <div className="button">
          <div className="home-btn">
            <button className="home">
              <GoHomeFill className="Icon-home" size={16} />
              Home
            </button>
          </div>
          <button className="logout">Log out</button>
        </div>
      </div>
    </>
  );
}

export default NavbarSide;
