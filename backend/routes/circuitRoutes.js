import express from 'express';
import { getCircuits } from '../controllers/circuitController.js';

const router = express.Router();

router.route('/').get(getCircuits);

export default router;
