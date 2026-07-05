import mongoose from 'mongoose';

const festivalSchema = new mongoose.Schema({
  festivalId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.model('Festival', festivalSchema);
