import mongoose from 'mongoose';

const circuitSchema = new mongoose.Schema({
  circuitId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  states: { type: String, required: true },
  description: { type: String, required: true },
  templesCount: { type: Number, required: true }
}, {
  timestamps: true
});

export default mongoose.model('Circuit', circuitSchema);
