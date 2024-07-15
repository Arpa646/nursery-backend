import { Request, Response } from 'express';
import { PlantServices } from './plantServices';

export const createPlant = async (req: Request, res: Response) => {
  try {
    const plant = await PlantServices.createPlantIntoDb(req.body);
    res.status(201).send(plant);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getPlants = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const plants = await PlantServices.getAllPlantsFromDB(searchTerm);
    res.status(200).send(plants);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getPlantById = async (req: Request, res: Response) => {
  try {
    const plant = await PlantServices.getSinglePlantFromDB(req.params.id);
    if (!plant) {
      return res.status(404).send();
    }
    res.status(200).send(plant);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updatePlant = async (req: Request, res: Response) => {
  try {
    const plant = await PlantServices.updatePlantFromDB(req.params.id, req.body);
    if (!plant) {
      return res.status(404).send();
    }
    res.status(200).send(plant);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deletePlant = async (req: Request, res: Response) => {
  try {
    const plant = await PlantServices.deletePlantFromDB(req.params.id);
    if (!plant) {
      return res.status(404).send();
    }
    res.status(200).send(plant);
  } catch (error) {
    res.status(500).send(error);
  }
};
