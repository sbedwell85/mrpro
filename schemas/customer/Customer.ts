import { Schema, model, models } from "mongoose";
import { ICustomer } from "../../types/customer/customer";
import { ContactSchema } from "../shared/Contact";
import { LocationSchema } from "../shared/Location";

const CustomerSchema = new Schema<ICustomer>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    active: { type: Boolean, default: true },
    contacts: [ContactSchema],
    locations: [LocationSchema],
  },
  { timestamps: true }
);

export default models.Customer || model<ICustomer>("Customer", CustomerSchema);
