const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      process.env.DB_URI,
      {
        useNewUrlparser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log(`mongoDB atlas CONECTADO!`))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
