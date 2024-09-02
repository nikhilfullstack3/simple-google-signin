import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/user", { withCredentials: true })
      .then((response) => setUser(response.data))
      .catch(() => setUser(null));
  }, []);

  return { user, setUser };
};

export default useAuth;
