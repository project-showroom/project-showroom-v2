import mongoose from 'mongoose';

const MONGODB_URI: string =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/nextjs';

// async function connect() {
//   mongoose.connect(MONGODB_URI).then((mongoose) => {
//     return mongoose;
//   });
// }
const connect = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGODB_URI, () => {
      console.log('MongoDB Connected...');
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    process.exit(1);
  }
};

export default connect;
