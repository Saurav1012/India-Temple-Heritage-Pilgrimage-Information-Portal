import express from 'express';
import { getFestivals } from '../controllers/festivalController.js';

const router = express.Router();

router.route('/').get(getFestivals);

export default router;
