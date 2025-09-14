export interface Task {
  _id?: string;       // MongoDB se aayega
  title: string;
  description: string;
  dueDate: string;
  status: string;
}