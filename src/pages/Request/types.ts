export declare namespace RequestPageTypes{
  export interface IProps{
    onCreateRequest?(data?: any, onError?: any): void;
  }
  export interface IState{
    username: string;
    password: string;
    loggedIn: boolean;
  }
}
