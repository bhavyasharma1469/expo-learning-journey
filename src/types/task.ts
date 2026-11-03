// The shape of every task in our app.
export type Task = {
  id: string;
  title: string;
  done: boolean;
  priority?: 'low' | 'medium' | 'high'; // "?" = optional; only these 3 strings allowed
};