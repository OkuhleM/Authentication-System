const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch ((err)=>console.log(err));
  console.log('process.env.MONGO_URI', process.env.MONGO_URI)

  const passwordStorage = mongoose.Schema(
    {
      username : {
        type: String, require
      }
    }
  )