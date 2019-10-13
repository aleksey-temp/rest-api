import { connect } from 'mongoose';

export const connectDb = async () => {
  connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
};
