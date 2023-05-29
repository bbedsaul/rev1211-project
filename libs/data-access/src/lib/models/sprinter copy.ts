import { StringDecoder } from "string_decoder";
import {Sticky} from "./sticky";
import {UserTraining} from "./user-training";

export interface Sprinter {
  id: string,
  email: string,
  displayName: string,
  firstName: string,
  lastName: string,
  usertraining?: UserTraining,
  photoUrl?: string,
  todo: Sticky[],
  doing: Sticky[],
  blocked: Sticky[],
  completed: Sticky[]
}
