const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");
const dotnet = require("dotenv");
const bodyParser = require("body-parser");

dotnet.config();

app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, async () =>
  console.log(`Example app listening on port ${port}!`)
);
