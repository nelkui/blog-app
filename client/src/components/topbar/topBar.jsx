import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa fa-instagram"></i>
        <i className="topIcon fa fa-facebook-square"></i>
        <i className="topIcon fa fa-linkedin-square"></i>
        <i className="topIcon fa fa-twitter-square"></i>
        <i className="topIcon fa fa-youtube square"></i>
      </div>

      <div className="topCentre">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link " to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link " to="/">
              LILLY
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link " to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link " to="/write">
              WRITE
            </Link>
          </li>

          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src="Lilylogo.jpeg" alt="" />
        ) : (
          <ul className="topListItem">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </ul>
        )}
        <i class="topSearchIcon fa fa-search"></i>
      </div>
    </div>
  );
}
