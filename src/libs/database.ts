import mongoose from 'mongoose';

const MONGODB_URI: string =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/nextjs';
console.log(typeof MONGODB_URI, 'MONGODB_URI');

async function connect() {
  mongoose.connect(MONGODB_URI).then((mongoose) => {
    return mongoose;
  });
}

export default connect;
