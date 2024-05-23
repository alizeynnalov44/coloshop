const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { Schema } = mongoose;
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

app.use(cors());

const port = 8080;
const DB_URL =
  "mongodb+srv://aleezeynalov:1234567A@cluster0.enzdiay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const ShouseSchema = new Schema(
  {
    title: { type: String, require: true },
    price: { type: Number, require: true },
    imageUrl: { type: String, require: true },
    description: { type: String, require: true },
  },
  { timestamps: true }
);

const ShouseModel = mongoose.model("Shouse", ShouseSchema);
app.get("/api/shouse", async (req, res) => {
  try {
    const shouse = await ShouseModel.find({});

    if (shouse.length > 0) {
      res.status(200).send({ message: "success", data: shouse });
    } else {
      res.status(204).send({
        message: "data is empty",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/api/shouses/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const shouse = await ShouseModel.findById(id);

    if (watch) {
      res.status(200).send({
        message: "success",
        data: shouse,
      });
    } else {
      res.status(404).send({ message: "data not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/api/shouses/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedShouse = await ShouseModel.findByIdAndDelete(id);

    res.status(200).send({
      message: "deleted succesfully!",
      deletedShouse: deletedShouse,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/shouses", async (req, res) => {
  try {
    const newShouse = new ShouseModel({ ...req.body });
    await newShouse.save();

    res.status(201).send({ message: "created succesfully!", data: newWatch });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link:  http://localhost:${port}`);
  });
});