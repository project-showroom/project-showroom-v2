import mongoose from 'mongoose';

const MONGODB_URI: string =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/nextjs';

async function connect() {
  mongoose.set('strictQuery', false);
  mongoose.connect(MONGODB_URI).then((mongoose) => {
    return mongoose;
  });
}

export default connect;
