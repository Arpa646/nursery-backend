import express from 'express';
import { createPlant, getPlants, getPlantById, updatePlant, deletePlant } from './plantController';

const router = express.Router();

router.post('/plants', createPlant);
router.get('/plants', getPlants);
router.get('/plants/:id', getPlantById);
router.patch('/plants/:id', updatePlant);
router.delete('/plants/:id', deletePlant);

export default router;
