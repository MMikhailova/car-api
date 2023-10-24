import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import carControllers from '../controllers/car.js';

const router = express.Router();

router.get('/', carControllers.showCars);
router.get('/add-car-form', verifyToken, carControllers.addCarForm);
router.post('/add-car', verifyToken, carControllers.addCar);

export default router;
