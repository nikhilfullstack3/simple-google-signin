import React from "react";
import Button from "../Common/Button";
import "../../styles/AuthButtons.css";

const LogoutButton = ({ onClick }) => (
  <Button className="logout-button" onClick={onClick}>
    Logout
  </Button>
);

export default LogoutButton;
