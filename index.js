const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/feed", (req, res) => {
  const backendUrl =
    "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1";
  axios.get(backendUrl).then((response) => res.send(response.data));
});

// console text when app is running
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
