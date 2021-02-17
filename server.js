const express = require("express");
const path = require("path");
const logger = require("morgan");

require("dotenv").config();
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

// API Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/products", require("./routes/api/products"));
app.use("/api/bundles", require("./routes/api/bundles"));
app.use("/api/stores", require("./routes/api/stores"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
