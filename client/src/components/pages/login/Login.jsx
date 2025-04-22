import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <form className="form LoginForm">
        <label>Email</label>
        <input type="text" placeholder="enter your email..."></input>
        <input type="password" placeholder="enter your password..."></input>
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </button>
    </div>
  );
}
