export declare namespace OfferPageTypes{
  export interface IProps{
    onCreateOffer?(data?: any, onError?: any): void;
  }
  export interface IState{
    username: string;
    password: string;
    loggedIn: boolean;
  }
}
