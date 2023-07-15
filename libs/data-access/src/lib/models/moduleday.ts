import { Sticky } from "./sticky";

export interface ModuleDay {
  id: string,
  name: string,
  title: string,
  description: string,
  stickies: Sticky[],
  completed?: boolean,
  updatedAt?: number
}
