import mongoose from 'mongoose';

const MONGODB_URI: any = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local',
  );
}
const opts: object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
};

async function connect() {
  mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    console.log(mongoose, 'mongoose');
    return console.log('Database connection established');
  });
}

export default connect;
