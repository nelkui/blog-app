import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebarItem">
          <div className="sidebarTitle">
            <span className="sidebarTitle">ABOUT</span>
            <img src="\wamdap.jpg" alt="" />
            <p>bla bla bla bla bla bla bla bla bla bla bla bla</p>
          </div>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Lilly</li>
            <li className="sidebarListItem">Ronny</li>
            <li className="sidebarListItem">Kayk</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CONTACT US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa fa-instagram"></i>
            <i className="sidebarIcon fa fa-facebook-square"></i>
            <i className="sidebarIcon fa fa-linkedin-square"></i>
            <i className="sidebarIcon fa fa-twitter-square"></i>
            <i className="sidebarIcon fa fa-youtube square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
