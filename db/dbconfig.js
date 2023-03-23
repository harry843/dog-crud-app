const mongoose = require("mongoose");
const { ServerApiVersion } = require("mongodb");

const mongoDB =
  "mongodb+srv://dbadmin:suhdude@dogapp.ivvhrul.mongodb.net/dogApp/?retryWrites=true&w=majorityd";

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

const dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
});

export const Dog = mongoose.models.Dog || mongoose.model("Dog", dogSchema);
