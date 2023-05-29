import {Sprinter} from "./sprinter";
import {Sticky} from "./sticky";

export interface Sprint {
  id: string,
  name: string,
  displayname: string,
  description: string,
  startTime: number,
  startDate: number,
  endDate: number,
  sprinters:Sprinter[],
}
