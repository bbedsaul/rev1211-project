import {Module} from "./module";

export interface Sprint {
  id: string,
  title: string,
  description: string,
  module: Module,
  startTime: number,
  startDate: number,
  endDate: number,
}
