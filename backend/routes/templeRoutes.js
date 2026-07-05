import express from 'express';
import { 
  getTemples, 
  getTempleById, 
  searchTemples, 
  searchTempleOnline, 
  addTemple, 
  updateTemple, 
  deleteTemple 
} from '../controllers/templeController.js';

const router = express.Router();

// 1. Specific / Search Routes First
router.route('/search/:query')
  .get(searchTemples);

router.route('/online/:query')
  .get(searchTempleOnline);

// 2. Base Routes Next
router.route('/')
  .get(getTemples)
  .post(addTemple);

// 3. Dynamic ID Routes Last
router.route('/:id')
  .get(getTempleById)
  .put(updateTemple)
  .delete(deleteTemple);

export default router;