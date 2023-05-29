import { Sprinter } from "./sprinter";
import { Sprint } from "./sprint";
import { Category } from "./category";
import { DefaultSticky } from "./default-sticky";

export interface Sticky {
  id: string,
  default_sticky: DefaultSticky,
  sprint: Sprint,
  sprinter: Sprinter,
}
