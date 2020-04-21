export namespace CabinetPageTypes {
  export interface IProps{
    userInfo?: any;
    userType?: string;
    toProducer?(data: string): void;
    toConsumer?(): void;
  }
}

export namespace PasswordPageTypes {
  export interface IProps{
    oldPassword: string;
    newPassword: string;
    onUpdatePassword?(data: object, onError: object): void;
  }
}