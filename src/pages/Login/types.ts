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

export declare namespace ForgotPageTypes{
  export interface IProps{
    onCheckLogin?(data?: any, onError?: any): void;
    onCheckCode?(data?: any, onError?: any): void;
    onPasswordSet?(data?: any, onError?: any): void;
    userNumber: string;
  }
}
