// TypeScript file

export interface ILocation {
  _id?: string;
  name: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  active?: boolean;
}
