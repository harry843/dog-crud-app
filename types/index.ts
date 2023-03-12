export interface Dog {
  [key: string]: string | number;
  _id: string;
  name: string;
  breed: string;
  age: number;
  __v: number;
}

export type Dogs = Dog[];
