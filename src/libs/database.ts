import mongoose from 'mongoose';

const MONGODB_URI: any = process.env.MONGODB_URI;

async function connect() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  };
  mongoose
    .connect(MONGODB_URI, opts)
    .then(() => {
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    })
    .catch((err) => {
      console.log(
        `MongoDB connection error. Please make sure MongoDB is running. ${err}`,
      );
      // process.exit();
    });
}

export default connect;
