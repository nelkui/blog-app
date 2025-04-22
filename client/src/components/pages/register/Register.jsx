import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <div className="registerForm">
        <form className="register">
          <label>Email</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your email..."
          ></input>
          <label> Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
          />
          <button className="registerButton">Login</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            LOGIN
          </Link>
        </button>
      </div>
    </div>
  );
}
