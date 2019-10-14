import { Schema, model, SchemaTypes } from 'mongoose';

const schema = new Schema({
  content: String,
  completed: {
    type: Boolean,
    default: false
  },
  project: {
    type: SchemaTypes.ObjectId,
    ref: 'Project'
  }
});

schema.set('timestamps', true);

schema.method('toJSON', function() {
  const { _id, __v, ...rest } = this.toObject();

  return { id: _id, ...rest };
});

export const Task = model('Task', schema);
