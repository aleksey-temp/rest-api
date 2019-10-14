import { Schema, model } from 'mongoose';
import { Task } from '.';

const schema = new Schema({
  name: String,
  description: String
});

schema.set('timestamps', true);

schema.method('toJSON', function() {
  const { _id, __v, ...rest } = this.toObject();

  return { id: _id, ...rest };
});

/**
 * Remove all associated tasks when project is deleted
 */
schema.pre('remove', async function(next) {
  await Task.deleteMany({
    project: this.id
  });

  next();
});

export const Project = model('Project', schema);
