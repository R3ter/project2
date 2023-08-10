const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://waleedsukhon77:YRngVYB3RtCKFZWL@cluster0.nzny34g.mongodb.net/"
  )
  .then(() => console.log("database connected"));

const personRouter = require("./Routers/PersonRouter");
app.use(cors());
app.use(express.json());
app.use("/persons", personRouter);

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
