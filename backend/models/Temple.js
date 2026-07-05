import mongoose from 'mongoose';

const templeSchema = new mongoose.Schema({
  templeId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  deity: { type: String, required: true },
  image: { type: String, required: true },
  history: { type: String },
  darshanTimings: { type: String },
  rituals: [String],
  guidelines: { type: String },
  facilities: [String],
  rating: { type: Number, default: 0 }
}, {
  timestamps: true
});

export default mongoose.model('Temple', templeSchema);
