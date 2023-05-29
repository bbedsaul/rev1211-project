export interface Task {
  id: string,
  name: string,
  description: string,
  taskNo: number,
  taskComplete: boolean,
  video?: string,
  updatedAt?: number
}
