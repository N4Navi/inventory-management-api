const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true
    },

    productCode: {
      type: String,
      required: true,
      unique: true
    },

    category: {
      type: String,
      required: true,
      enum: ["Electronics", "Clothing", "Food", "Furniture"]
    },

    supplierName: {
      type: String,
      required: true
    },

    quantityInStock: {
      type: Number,
      required: true
    },

    reorderLevel: {
      type: Number,
      required: true
    },

    unitPrice: {
      type: Number,
      required: true
    },

    manufactureDate: {
      type: Date,
      required: true
    },

    productType: {
      type: String,
      enum: ["Perishable", "Non-Perishable"],
      required: true
    },

    status: {
      type: String,
      enum: ["Available", "Out of Stock"],
      default: "Available"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);