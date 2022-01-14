const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.7owkw.mongodb.net/activites-paris"
  )
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));