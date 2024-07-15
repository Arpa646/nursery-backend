import { PlantModel } from './plantModel';
import { Plant } from './plantInterface';

const createPlantIntoDb = async (plant: Plant) => {
  const result = await PlantModel.create(plant);
  return result;
};

const getAllPlantsFromDB = async (searchTerm?: string) => {
  let query = {};
  if (searchTerm) {
    if (typeof searchTerm === 'string') {
      query = {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } },
        ],
      };
    } else {
      console.warn('Search term is not a string. Ignoring search.');
    }
  }

  const result = await PlantModel.find(query);
  return result;
};

const deletePlantFromDB = async (id: string) => {
  const result = await PlantModel.deleteOne({ _id: id });
  return result;
};

const getSinglePlantFromDB = async (id: string) => {
  const result = await PlantModel.findOne({ _id: id });
  return result;
};

const updatePlantFromDB = async (id: string, plantData: Partial<Plant>) => {
  console.log(id,plantData)
  const result = await PlantModel.findByIdAndUpdate(id, plantData, {
    new: true,
  });

  return result;
};




export const PlantServices = {
  createPlantIntoDb,
  getAllPlantsFromDB,
  updatePlantFromDB,
  getSinglePlantFromDB,
  deletePlantFromDB,
};
