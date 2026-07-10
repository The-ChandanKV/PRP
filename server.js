const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

// Google OAuth callback route
app.get("/auth/google/callback", (req, res) => {
  const { token } = req.query;
  // Here, handle the token, e.g., create JWT session
  res.json({ message: "OAuth callback received!", token });
});

// Additional route to handle user information after OAuth
app.get("/auth/google/user", (req, res) => {
  // Here, you would typically fetch user information from your database or service
  res.json({ user: "User information would be retrieved here" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});