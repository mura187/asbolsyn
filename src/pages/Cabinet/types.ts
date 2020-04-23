export namespace CabinetPageTypes {
  export interface IProps{
    userInfo?: any;
    myItems?: any;
    myRequests?: any;
    userType?: string;
    toProducer?(data: string): void;
    toConsumer?(): void;
    getMyItems?(): void;
    getMyRequests?(): void;
  }
}

export namespace PasswordPageTypes {
  export interface IProps{
    oldPassword: string;
    newPassword: string;
    onUpdatePassword?(data: object, onError: object): void;
  }
}