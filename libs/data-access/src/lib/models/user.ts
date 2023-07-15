export interface User {
  id: string;
  email?: string;
  confirmed: boolean;
  blocked: boolean;
  updatedAt?: number;
  createdAt?: number;
}
