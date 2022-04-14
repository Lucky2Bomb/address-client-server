import { GroupModel } from "./group";

export interface CitizenModel {
  _id: string;
  name: string;
  city_id: string;
  groups: GroupModel[];
}