const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

module.exports = () => {
  // eslint-disable-next-line function-paren-newline
  mongoose.connect(
    process.env.MONGO_DB, {
    //   useCreateIndex: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database connection established successfully")
    })
    .catch((error) => {
      console.log("Database connection failed due to error: ", error)
    })
}