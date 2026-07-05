import Circuit from '../models/Circuit.js';

// @desc    Get all circuits
// @route   GET /api/circuits
// @access  Public
export const getCircuits = async (req, res) => {
  try {
    const circuits = await Circuit.find({});
    res.json(circuits);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
