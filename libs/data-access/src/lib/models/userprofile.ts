import { Sprinter } from "./sprinter";

export interface UserProfile {
  id: string;
  displayName?: string;
  username?: string;
  photoUrl?: string,
  email?: string;
  confirmed: boolean,
  blocked: boolean,
  sprinter: Sprinter,
  updatedAt?: number;
  createdAt?: number;
}
