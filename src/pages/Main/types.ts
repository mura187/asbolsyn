export namespace MainPageTypes {
  export interface IProps{
    items?: any;
    requests?: any;
    getItems?(): void;
    getRequests?(): void;
  }
}