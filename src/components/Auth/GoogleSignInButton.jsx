import React from "react";
import Button from "../Common/Button";
import { FaGoogle } from "react-icons/fa";
import "../../styles/AuthButtons.css";

const GoogleSignInButton = ({ onClick }) => (
  <Button className="google-signin-button" onClick={onClick}>
    <FaGoogle className="google-logo" />
    Sign in with Google
  </Button>
);

export default GoogleSignInButton;
