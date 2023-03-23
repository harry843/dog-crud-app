const mongoose = require("mongoose");

const mongoDB = process.env.REACT_APP_MONGODB;

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

export const Dog = mongoose.models.Dog || mongoose.model("Dog", dogSchema);
