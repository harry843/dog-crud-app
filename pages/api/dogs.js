console.log("Program initiating...");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const mongoDB = "mongodb://localhost:27017/dogs";

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error :"));

const dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
});

const Dog = mongoose.model("Dog", dogSchema);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

const port = 5678;

app.get("/", async (req, res) => {
  try {
    const dogs = await Dog.find({});
    res.json(dogs);
  } catch (err) {
    console.log(err);
  }
});

app.get("/dogs/:id", async (req, res) => {
  try {
    const dog_by_id = await Dog.findById(req.params.id, {});
    res.json({
      message: `${dog_by_id.name}, a ${dog_by_id.breed} aged ${dog_by_id.age} was retrieved from the collection, with id: ${dog_by_id._id}`,
    });
    console.log(dog_by_id);
  } catch (err) {
    console.log(err);
  }
});

app.post("/dogs", (req, res) => {
  const dog = new Dog({
    name: req.body.name,
    breed: req.body.breed,
    age: req.body.age,
  });
  try {
    console.log(req.body);
    dog.save();

    res.json({ message: `${req.body.name} was added to the collection!` });
  } catch (err) {
    console.log(err);
  }
});

app.put("/dogs/:id", async (req, res) => {
  try {
    const dog_update = await Dog.findByIdAndUpdate(req.params.id, req.body, {});
    res.json({ message: `Updated dog ${req.params.id}` });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/dogs/:id", async (req, res) => {
  try {
    const dog_delete = await Dog.findByIdAndDelete(req.params.id);
    res.json({ message: `Deleted dog ${req.params.id} from collection.` });
    console.log(`Deleted dog ${req.params.id} from collection.`)
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});