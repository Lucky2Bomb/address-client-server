import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface CityInterface {
  name: string;
  data: string;
}

const citySchema = new Schema<CityInterface>({
  name: { type: String, required: true, unique: true },
  data: { type: String, required: true },
});

export const CityModel = mongoose.model("City", citySchema);
