import Home from "./components/pages/home/Home";
//import Single from "./components/pages/single/Single";
//import Settings from "./components/pages/settings/Settings";
import Write from "./components/pages/write/Write";
import Login from "./components/pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/pages/register/Register";
import TopBar from "./components/topbar/topBar";
import Settings from "./components/pages/settings/Settings";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
