import React from "react";
import GoogleSignInButton from "../components/Auth/GoogleSignInButton";
import LogoutButton from "../components/Auth/LogoutButton";

import useAuth from "../hooks/useAuth";
import authService from "../services/authServices.js";
import Header from "../components/Common/Header";

const HomePage = () => {
  const { user, setUser } = useAuth();

  const handleLogin = () => {
    authService.login();
  };

  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        setUser(null);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="app-container">
      <Header />
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <LogoutButton onClick={handleLogout} />
        </div>
      ) : (
        <GoogleSignInButton onClick={handleLogin} />
      )}
    </div>
  );
};

export default HomePage;
