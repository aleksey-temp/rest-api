import { Schema, model, SchemaTypes } from 'mongoose';

const schema = new Schema({
  content: String,
  completed: Boolean,
  project: {
    type: SchemaTypes.ObjectId,
    ref: 'Project'
  }
});

schema.set('timestamps', true);

export const Task = model('Task', schema);
