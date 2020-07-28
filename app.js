const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());

//routes
const gameRoutes = require("./routes/games");
const publisherRoutes = require("./routes/publishers");

//routers
app.use("/games", gameRoutes);
app.use("/publishers", publisherRoutes);
//media router
app.use("/media", express.static(path.join(__dirname, "media")));

//Page Not Found Handler
app.use((req, res, next) => {
  const error = new Error("Path Not Found");
  error.status = 404;
  next(error);
});

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message || "Internal Server Error" });
});

const run = async () => {
  try {
    await db.sync();

    console.log("Connection to DB Succs");
  } catch (error) {
    console.log("Connection to DB Not Succs", error);
  }
  app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};
run();
