import { Schema } from "mongoose";

export const ContactSchema = new Schema(
  {
    first: { type: String, required: true },
    last: { type: String, required: true },
    title: { type: String },
    cell: { type: String },
    phone: { type: String },
    email: { type: String },
    active: { type: Boolean, default: true },
  },
  { _id: false }
);
