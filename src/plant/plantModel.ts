import { Schema, model } from "mongoose";
import { Plant } from "./plantInterface";

const plantSchema = new Schema<Plant>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  category: { type: String, required: true },
stock: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  
});

export const PlantModel = model<Plant>("Plant", plantSchema);
