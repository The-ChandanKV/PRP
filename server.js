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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});