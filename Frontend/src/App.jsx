import { Routes, Route,Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Home from "./pages/home/Home.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
function App() {
  const { authuser } = useAuthContext();
  return (
    <>
      <div className="p-4 h-screen flex justify-center items-center">
        <Routes>
          <Route path="/" element={authuser ? <Home/> :<Navigate to="/login"/> } />
          <Route path="/Login" element={authuser ? <Navigate to="/"/>:<Login/>} />
          <Route path="/Signup" element={authuser ? <Navigate to="/"/>:<Signup/>} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
