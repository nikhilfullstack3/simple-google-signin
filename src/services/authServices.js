const authServices = {
  login: () => {
    window.location.href = "/auth/google";
  },
  logout: () => {
    return fetch("/auth/logout", {
      method: "GET",
      credentials: "include",
    });
  },
};

export default authServices;
