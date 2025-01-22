export class Task {
  taskId: number;
  taskName: string;
  taskDescription: string;
  taskStatus: string;

  constructor() {
    this.taskId = 0;
    this.taskName = '';
    this.taskDescription = '';
    this.taskStatus = '';
  }
}
