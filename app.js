const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config()
const notFound = require("./middleware/not-found")
const erroHandlerMiddleware = require("./middleware/error-handler")
// middleware

app.use(express.static("./public"));
app.use(express.json());
// routes

app.use("/api/v1/tasks", tasks);
app.use(notFound)
app.use(erroHandlerMiddleware)

const port = process.env.PORT || 3000;
 

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
