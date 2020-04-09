export declare namespace LoginPageTypes{
  export interface IProps{
    onLogin?(data?: any, onError?: any): void;
  }
  export interface IState{
    username: string;
    password: string;
    loggedIn: boolean;
  }
}
