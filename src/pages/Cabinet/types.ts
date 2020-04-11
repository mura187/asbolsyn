export namespace CabinetPageTypes {
  export interface IProps{
    userInfo?: any;
  }
}

export namespace PasswordPageTypes {
  export interface IProps{
    oldPassword: string;
    newPassword: string;
    onUpdatePassword?(data: object, onError: object): void;
  }
}