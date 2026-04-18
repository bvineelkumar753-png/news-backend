const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// API route
app.post("/verify", (req, res) => {
  const { news } = req.body;

  if (!news) {
    return res.status(400).json({
      success: false,
      message: "No news provided"
    });
  }

  const isFake = news.toLowerCase().includes("fake");

  res.json({
    success: true,
    result: isFake ? "Fake News ❌" : "Real News ✅"
  });
});

// ✅ IMPORTANT FIX FOR ONLINE HOSTING
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});