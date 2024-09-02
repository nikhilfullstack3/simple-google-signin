// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./index.css"; // Import your CSS file

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios
//       .get("/api/user", { withCredentials: true })
//       .then((response) => setUser(response.data))
//       .catch(() => setUser(null));
//   }, []);

//   const handleLogin = () => {
//     window.location.href = "/auth/google";
//   };

//   const handleLogout = () => {
//     axios
//       .get("/auth/logout", { withCredentials: true })
//       .then(() => {
//         setUser(null);
//         window.location.href = "http://localhost:5173";
//       })
//       .catch((error) => {
//         console.error("Logout error:", error);
//       });
//   };

//   return (
//     <div className="app-container">
//       <h1>Google Sign-In Example</h1>
//       {user ? (
//         <div>
//           <h2>Welcome, {user.name}!</h2>
//           <button className="logout-button" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       ) : (
//         <button className="google-signin-button" onClick={handleLogin}>
//           <img
//             src="https://developers.google.com/identity/images/g-logo.png"
//             alt="Google logo"
//             className="google-logo"
//           />
//           Sign in with Google
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;

import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default App;
