import { useContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContext from "./context/AuthContext";
import getDecodedToken from "./api/auth/getDecodedToken";

function App() {
  const [auth, setAuth] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getDecodedToken(token).then((res) => {
        setAuth({
          userId: res.userId,
          fullname: res.fullname,
          isAdmin: res.isAdmin,
          isPengelola: res.isPengelola
        });
      });
    }
  }, [setAuth, token]);

  return (
    <Router>
      <div className="App">
        <AuthContext.Provider value={{ auth, setAuth }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
