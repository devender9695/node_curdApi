require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 2552;
const productRouts = require("./routes/product.route.js");
const prodcut = require("./model/product.model.js");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected successfully");
  })
  .catch(() => {
    console.log("somthing went wrong");
  });

app.use("/api/Prodcuts", productRouts);

app.get("/", (req, res) => {
  res.json({
    Hello: "express server",
  });
});

app.listen(PORT, () => {
  console.log(`server is listing on :${PORT}`);
});
