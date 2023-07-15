import { Sprint } from "./sprint";
import { User } from "./user";

export interface Userprofile {
  id: string;
  email?: string;
  displayName?: string;
  fname?: string;
  lname?: string;
  phone?: string;
  photoUrl?: string,
  facilitated: Sprint[],
  sprints: Sprint[],
  sponsors: Sprint[],
  user: User,
  updatedAt?: number;
  createdAt?: number;
}
