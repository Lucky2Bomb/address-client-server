import mongoose from "mongoose";
import { Types, Schema } from "mongoose";

export interface GroupInterface {
  // _id: Types.ObjectId;
  type: string;
  name: string;
}

const groupSchema = new Schema<GroupInterface>({
  type: { type: String, required: true },
  name: { type: String, required: true },
});

export const GroupModel = mongoose.model("Group", groupSchema);
