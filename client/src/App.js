import React from "react";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/user/dashboard/dashboard";
import Admin from "./pages/admin/dashboard/dashboard";
import Signup from "./components/signup";
import Signin from "./components/signin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
