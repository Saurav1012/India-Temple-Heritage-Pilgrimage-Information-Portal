import Festival from '../models/Festival.js';

// @desc    Get all festivals
// @route   GET /api/festivals
// @access  Public
export const getFestivals = async (req, res) => {
  try {
    const festivals = await Festival.find({});
    res.json(festivals);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
