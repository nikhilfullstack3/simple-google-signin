import React from "react";

const LoginPage = () => (
  <div className="login-page">
    <h1>Please log in</h1>
    <button onClick={() => (window.location.href = "/auth/google")}>
      Login with Google
    </button>
  </div>
);

export default LoginPage;
