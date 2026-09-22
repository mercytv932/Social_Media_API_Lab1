const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function mongoDbConnect() {
  try {
    await client.connect();
    console.log("Database connection successful!");
  } catch (error) {
    console.error("Mongodb connection Error:", error);
  }
}

mongoDbConnect();
