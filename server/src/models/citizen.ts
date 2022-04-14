import mongoose from "mongoose";
import { Types, Schema, Model } from "mongoose";
import { GroupInterface } from "./group";

export interface CitizenInterface {
  name: string;
  city_id: any;
  groups: GroupInterface[];
}

const citizenSchema = new Schema<CitizenInterface, Model<CitizenInterface>>({
  name: { type: String, required: true },
  city_id: { type: Schema.Types.ObjectId, required: true },
  groups: [
    {
      type: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
});

export const CitizenModel = mongoose.model('Citizen', citizenSchema);