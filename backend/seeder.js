import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import colors from "colors";
dotenv.config();


console.log("Starting");
await connectDB();
console.log("Ending");
async function importData() {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map(function (product) {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch {
    error;
  }
  {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
}

async function destroyData() {
  try {
    await Order.deleleMany({});
    await User.deleleMany({});
    await Product.deleteMany({});
    
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
}

if (process.argv[2] == "-d") {
  await destroyData();
} else {
  await importData();
}
