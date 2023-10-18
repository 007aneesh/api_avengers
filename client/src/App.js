import React from "react";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/user/dashboard/dashboard";
import Admin from "./pages/admin/dashboard/dashboard";
import Signup from "./components/signup";
import Signin from "./components/signin";
import About from "./pages/about";
import PrivacyPolicy from "./pages/privacyPolicy";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard/patient/:patientId" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
