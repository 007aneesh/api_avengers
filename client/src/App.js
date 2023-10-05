import React from "react";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/user/dashboard/dashboard";
import Admin from "./pages/admin/dashboard/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
