import mongoose from 'mongoose';

const MONGODB_URI: any = process.env.MONGODB_URI;

async function connect() {
  mongoose.connect(MONGODB_URI).then((mongoose) => {
    return mongoose;
  });
}

export default connect;
