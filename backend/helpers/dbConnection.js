const mongoose = require("mongoose");
const config = require("../config");

function connect() {
  mongoose.connect(config.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    dbName: "test",
  });
  mongoose.Promise = Promise;

  // When successfully connected
  mongoose.connection.on("connected", () => {
    console.log(`Mongoose default connection open`);
  });

  // If the connection throws an error
  mongoose.connection.on("error", (err) => {
    console.log(`Mongoose default connection error: ${err}`);
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose default connection disconnected");
  });
}
module.exports = connect();
