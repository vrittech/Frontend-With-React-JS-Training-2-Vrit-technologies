const mongoose = require("mongoose");

const MONGO_URI = "MONGO_URL_FROM_ENV";

const connDB = async () => {
   try {
      const conn = await mongoose.connect(MONGO_URI, {
         useUnifiedTopology: true,
         useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit(1);
   }
};

module.exports = connDB;
