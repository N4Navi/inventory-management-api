const Product = require("../models/product");

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

exports.searchProduct = async (req, res) => {
  const keyword = req.query.keyword;

  const products = await Product.find({
    $or: [
      { productName: { $regex: keyword, $options: "i" } },
      { category: { $regex: keyword, $options: "i" } }
    ]
  });

  res.json(products);
};