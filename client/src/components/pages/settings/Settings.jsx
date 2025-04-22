import "./settings.css";
import Sidebar from "../../sidebar/Sidebar";

export default function Settings() {
  return (
    <div>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete account</span>
          </div>
          <form className="settingsForm">
            <label>Profile picture</label>
            <div className="settingsPP">
              <img src="setting.png" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon  fa fa-user-circle-o"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label> Username</label>
            <input type="text" placeholder="nel"></input>
            <label>email</label>
            <input type="email" placeholder="nellipsy02@gmail.com"></input>
            <label> Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
