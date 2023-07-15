import { Sprinter } from "./sprinter";
import { Sprint } from "./sprint";
import { Category } from "./category";

export interface Sticky {
  id: string,
  name: string,
  description: string,
  points: number,
  order: number,
  url: string,
  type: string,
  completed: boolean,
}
