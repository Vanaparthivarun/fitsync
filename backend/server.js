const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());


app.get("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
