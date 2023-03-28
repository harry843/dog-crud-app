const mongoose = require("mongoose");
const { ServerApiVersion } = require("mongodb");

//Retrieve database connection parameters from .env file
const mongoDB = process.env.REACT_APP_MONGODB

//Connect to MongoDB via mongoose library
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
    family: 4,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error :"));

//Define Data Model
const dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
});

export const Dog = mongoose.models.Dog || mongoose.model("Dog", dogSchema);
