import { ModuleDay } from "./moduleday";

export interface Module {
  id: string,
  name: string,
  title: string,
  description: string,
  days: number,
  moduleDays: ModuleDay[],
  completed?: boolean,
  updatedAt?: number
}
