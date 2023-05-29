import {Sticky} from "./sticky";
import {Sprint} from "./sprint";
import { UserProfile } from "./userprofile";

export interface Sprinter {
  id: string | '',
  displayName: string | '',
  firstName: string | '',
  lastName: string | '',
  photoUrl?: string | '',
  sprints:Sprint[],
  todo:Sticky[],
  doing:Sticky[],
  completed:Sticky[],
  next_stickies: Sticky[],
  user: UserProfile,
}
