require("dotenv").config();
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "please enter the product name"],
    },

    quantity: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
