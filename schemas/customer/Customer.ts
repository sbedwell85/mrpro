import mongoose, { Schema, model } from "mongoose";
import { ICustomer } from "../../types/customer/customer.ts";
import { ContactSchema } from "../shared/Contact.ts";
import { LocationSchema } from "../shared/Location.ts";

const CustomerSchema = new Schema<ICustomer>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    active: { type: Boolean, default: true },
    contacts: [ContactSchema],
    locations: [LocationSchema],
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Customer || model<ICustomer>("Customer", CustomerSchema);
