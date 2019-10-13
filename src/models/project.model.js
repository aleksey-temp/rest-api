import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: String,
  description: String
});

schema.set('timestamps', true);

schema.method('toJSON', function() {
  const { _id, __v, ...rest } = this.toObject();

  return { id: _id, ...rest };
});

export const Project = model('Project', schema);
