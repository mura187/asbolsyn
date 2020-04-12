export declare namespace LoginPageTypes{
  export interface IProps{
    onCheckPhone?(data?: object, onError?: any): void;
    onCheckCode?(data?: object, onError?: any): void;
    onRegister?(data?: object, onError?: any): void;
  }
  export interface IState{
    phone: string;
    code: string;
    loggedIn: boolean;
  }
}
