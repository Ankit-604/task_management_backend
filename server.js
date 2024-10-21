const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const userRouter = require("./routes/userRouter");

const PORT = process.env.PORT || 6000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware routes
app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port ", PORT);
});

app.on("error", onError);
//handling error for server
function onError(error) {
  if (error.syscall === "listen") {
    throw error;
  }

  switch (error.code) {
    case "EACCES":
      console.error(port + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(port + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
