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
    return true;
  } catch (error) {
    console.error("Mongodb connection Error:", error);
    return false;
  }
}

// Route
app.get("/", async (req, res) => {
  const connected = await mongoDbConnect(); //Is server connected to Mongodb?

  if (connected) {
    return res.json({ message: "Successfully connected to the database!" });
  } else {
    res.status(500).json({ message: "Failed to connect to the database." });
  }
});

// Port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); //start the server
