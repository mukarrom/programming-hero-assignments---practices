const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;
//call express
const app = express();

// middleware
app.use(cors());
app.use(express.json());

//connect to database

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@assignment11cluster.zbqd5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const shoesCollection = client
      .db("assignment11db")
      .collection("productCollection");

    //Read all from database (shoes collection api)
    app.get("/product", async (req, res) => {
      const query = {};
      const cursor = shoesCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });

    // Read one data from database (search data by id)
    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await shoesCollection.findOne(query);
      res.send(result);
    });
    // add new data to database (create)
    app.post("/product", async (req, res) => {
      const newProduct = req.body;
      const result = await shoesCollection.insertOne(newProduct);
      res.send(result);
    });
    // delete item from database
    app.delete("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await shoesCollection.deleteOne(query);
      res.send(result);
    });

    // Update data
    app.put("/product/:id", async (req, res) => {
      const id = req.params.id;
      const updateProduct = req.body;
      const query = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          stock: updateProduct.stock,
        },
      };
      const result = await shoesCollection.updateOne(query, updateDoc, options);
      res.send(result);
    });
  } finally {
  }
}

run().catch(console.dir);

// server running check
app.get("/", (req, res) => {
  res.send("Assignment-11 Server is running");
});

// Listen server on terminal
app.listen(port, () => {
  console.log("Listen the port", port);
});
