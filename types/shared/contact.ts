export interface IContact {
  _id?: string;
  first: string;
  last: string;
  title: string;
  cell: string;
  phone: string;
  email: string;
  active?: boolean;
}

//SyntaxError: The requested module '../shared/contact.ts' does not provide an export named 'IContact'
