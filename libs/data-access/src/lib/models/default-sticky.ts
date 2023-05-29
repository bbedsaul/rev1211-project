import { Category } from "./category";

export interface DefaultSticky {
  id: string,
  name: string,
  description: string,
  points: number,
  icon: string,
  method: string,
  category: Category,
}
