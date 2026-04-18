const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

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

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});