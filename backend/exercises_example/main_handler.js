const express = require("express");
const app = express();
const PORT = 3033;
app.use(express.json());

app.post("/")

app.listen(PORT, () => {
  console.log("http://localhost:3033");
});
