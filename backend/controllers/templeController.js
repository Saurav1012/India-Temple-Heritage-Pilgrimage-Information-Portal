import Temple from '../models/Temple.js';
import axios from 'axios';

// @desc    Get all temples
// @route   GET /api/temples
// @access  Public
export const getTemples = async (req, res) => {
  try {
    const temples = await Temple.find({});
    res.json(temples);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Get temple by ID
// @route   GET /api/temples/:id
// @access  Public
export const getTempleById = async (req, res) => {
  try {
    const temple = await Temple.findOne({ templeId: req.params.id });

    if (temple) {
      res.json(temple);
    } else {
      res.status(404).json({ message: 'Temple not found' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Search temples from MongoDB
// @route   GET /api/temples/search/:query
// @access  Public
export const searchTemples = async (req, res) => {
  try {
    const query = req.params.query;
    const regex = new RegExp(query, 'i');

    const temples = await Temple.find({
      $or: [
        { name: regex },
        { city: regex },
        { state: regex },
        { deity: regex }
      ]
    });

    res.json(temples);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Smart Search (MongoDB + Wikipedia)
// @route   GET /api/temples/online/:query
// @access  Public
export const searchTempleOnline = async (req, res) => {
  try {
    const query = req.params.query;
    const regex = new RegExp(query, "i");

    // MongoDB Search
    const temple = await Temple.findOne({
      $or: [
        { name: regex },
        { city: regex },
        { state: regex },
        { deity: regex }
      ]
    });

    if (temple) {
      return res.json({
        source: "database",
        data: temple
      });
    }

    // Wikipedia Search
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
    );

    res.json({
      source: "wikipedia",
      data: {
        name: response.data.title,
        history: response.data.extract,
        image: response.data.thumbnail?.source || "",
        page: response.data.content_urls?.desktop?.page || ""
      }
    });
  } catch (error) {
    res.status(404).json({ message: "Temple not found" });
  }
}; // <-- Fixed: Properly closed searchTempleOnline here

// @desc    Add Temple
// @route   POST /api/temples
// @access  Admin
export const addTemple = async (req, res) => {
  try {
    const temple = await Temple.create(req.body);
    res.status(201).json(temple);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update Temple
// @route   PUT /api/temples/:id
export const updateTemple = async (req, res) => {
  try {
    // Fixed to match custom templeId like getTempleById
    const temple = await Temple.findOneAndUpdate(
      { templeId: req.params.id },
      req.body,
      { new: true }
    );

    if (!temple) {
      return res.status(404).json({ message: "Temple not found" });
    }

    res.json(temple);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete Temple
// @route   DELETE /api/temples/:id
export const deleteTemple = async (req, res) => {
  try {
    // Fixed to match custom templeId like getTempleById
    const temple = await Temple.findOneAndDelete({ templeId: req.params.id });

    if (!temple) {
      return res.status(404).json({ message: "Temple not found" });
    }

    res.json({ message: "Temple Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};