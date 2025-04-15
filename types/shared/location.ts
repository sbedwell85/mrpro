export interface ILocation {
  name: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  active?: boolean;
}
