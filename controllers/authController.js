export const googleAuth = (req, res) => {
  res.redirect(process.env.FRONTEND_URL); // Replace with your frontend URL
};

export const getCurrentUser = (req, res) => {
  if (req.isAuthenticated()) return res.json({ name: req.user.name });
  res.status(401).json({ message: "Not authenticated" });
};

export const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error logging out" });
    }

    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error destroying session" });
      }

      res.clearCookie("connect.sid"); // Clear the session cookie
      res.redirect(process.env.FRONTEND_URL); // Redirect to the frontend
    });
  });
};
