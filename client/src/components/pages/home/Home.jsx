import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
