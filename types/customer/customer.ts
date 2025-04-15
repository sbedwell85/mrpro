import { Types } from "mongoose";
import { IContact } from "../shared/contact";
import { ILocation } from "../shared/location";

export interface ICustomer {
  _id?: Types.ObjectId;
  name: string;
  phone: string;
  active?: boolean;
  contacts: IContact[];
  locations: ILocation[];
}
