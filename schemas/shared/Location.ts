import { Schema } from "mongoose";

export const LocationSchema = new Schema(
  {
    name: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { _id: false }
);
