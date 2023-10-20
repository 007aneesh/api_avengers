import React, { useEffect, useState } from "react";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/user/dashboard/dashboard";
import Admin from "./pages/admin/dashboard/dashboard";
import Signup from "./components/signup";
import Signin from "./components/signin";
import About from "./pages/about";
import PrivacyPolicy from "./pages/privacyPolicy";
import ProtectedRoute from "./protected";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin]= useState(false);

  useEffect(() => {
    async function checkIfUserIsAuthenticated() {
      const token = localStorage.getItem("token");
      const patientId = localStorage.getItem("patientId");
      const adminData = localStorage.getItem("admin");
      if(!adminData){
        if (!token && !patientId) {
          setIsAuthenticated(false);
          return;
        }
        setIsAuthenticated(true);
        // Perform an API request to get the user's token array from the database
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BASEURL}/patient/${patientId}`
          );
          if (response.status === 200) {
            const userData = await response.json();
            const userTokens = userData.tokens;
            const lastUserToken = userTokens[userTokens.length - 1];

            if (token === lastUserToken) {
              setIsAuthenticated(true);
            }
          }
        } catch (error) {
          console.error("Error checking user authentication:", error);
        }
      }else{
        setIsAuthenticated(true);
        setIsAdmin(true);
        
      }
    }

    checkIfUserIsAuthenticated();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home isAuthenticated={isAuthenticated} isAdmin={isAdmin} />}
        />
        {/* <Route path="/dashboard/patient/:patientId" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} /> */}
        <Route
          path="/admin/:registrationNo"
          element={
            <ProtectedRoute user={isAuthenticated}>
              <Admin setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/patient/:patientId"
          element={
            <ProtectedRoute user={isAuthenticated}>
              <Dashboard setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/signin"
          element={<Signin setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
