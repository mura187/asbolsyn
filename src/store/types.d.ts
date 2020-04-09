export interface ILoadTypes<T> {
  data: T;
  loading: any;
  errorMessage?: string;
}

export interface Action<T> {
  [param: string]: T;
}

export type ActionType<T> = Action<T> & {
  type: string;
  errorMessage?: string;
};
