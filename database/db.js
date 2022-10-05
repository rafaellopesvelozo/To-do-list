const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.nqu0ikk.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlparser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log(`mongoDB atlas CONECTADO!`))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
